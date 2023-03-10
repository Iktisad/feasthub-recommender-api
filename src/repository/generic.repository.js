import { Op } from 'sequelize';
import db from '../database/index.js';

export class GenericRepository {
    constructor(model) {
        this.model = model;
    }
    countDocuments = async () => {
        return await this.model.count();
    };

    find = async ({ query = {}, include, attributes, start, limit, sort = { createdAt: 'ASC' } }) => {
        // const order = Object.entries(sort).flat()
        const result = await this.model.findAll({
            where: query,
            include,
            attributes,
            offset: start,
            limit,
            // order
        });
        if(result.length) {
            return result.map(
                (item) => item.get({ plain: true })
            )
        }
        return [] 
    };

    findOne = async ({query = {}, attributes,  sort = { createdAt: 'ASC' }}) => {
        // const order = sort.Object.entries(sort).flat()
        const result = await this.model.findOne({
            where: query,
            attributes,
            // order
        });
        if(result) {
            return result.get({ plain: true })
        }
        return null
    };

    findById = async (id) => {
        const result = await this.model.findOne(
            {
                where: { _id: id },
            });
        if(result) {
            return result.get({ plain: true })
        }
        return null
    };

    create = async (payload) => {
        return await this.model.create(payload);
    };

    bulkCreate = async (payloads) => {
        return await this.model.bulkCreate(payloads);
    };

    update = async ({query = {}, payload}) => {
        return await this.model.update(payload, {
            where: query,
            returning: true
        });
    };

    save = async (data) => {
        if (data.id) {
            // update
            const result = await this.model.update(data, {
                where: { id: data.id },
                returning: true
            });
            if(result.length > 1) {
                return result[1][0]
            }
            return null
        } else {
            //create
            return await this.model.create(data);
        }
    }

    findByIdAndUpdate = async ({id, payload}) => {
        const result = await this.model.update(payload, {
            where: { _id: id }
        });
        if(!result.length || result[0] !== 1) {
            return null
        }
        return await this.findById(id)
    };

    remove = async ({id}) => {
        return await this.model.destroy({
            where: { id }
        });
    };

    findAndPopulate = async ({ query = {}, include, attributes,start, limit, sort = { createdAt: 'ASC' } }) => {
        let includeQuery = [];
        if (include) {
            includeQuery = include.map((item) => {
                return {
                    model: db[ item.model ],
                    as: item.as,
                    attributes: item.attributes ? item.attributes : {},
                    include: item.include ? item.include.map((item) => {
                        return {
                            model: db[ item.model ],
                            as: item.as,
                            attributes: item.attributes ? item.attributes : {},
                        }
                    }) : []
                }
            });
        }
        const result = await this.model.findAll({
            where: query,
            include: includeQuery,
            attributes,
            offset: start,
            limit
        });

        if (result.length) {
            return result.map(
                (item) => item.get({ plain: true })
            )
        }
        return null
    };

    sql = async (sql) => {
        // raw query
        return await db.sequelize.query(sql, {
            type: db.sequelize.QueryTypes.SELECT
        });
    };
}
