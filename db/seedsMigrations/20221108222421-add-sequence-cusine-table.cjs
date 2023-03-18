'use strict';
const tableName = 'Cusines';
const sequenceColumn = 'id';

module.exports = {
  up: (queryInterface) => queryInterface.sequelize.transaction(async (transaction) => {
    // Get current highest value from the table
    const [ [ { max } ] ] = await queryInterface.sequelize.query(`SELECT MAX("${sequenceColumn}") AS max FROM public."${tableName}";`, { transaction });
    // Set the autoincrement current value to highest value + 1
    await queryInterface.sequelize.query(`ALTER SEQUENCE public."${tableName}_${sequenceColumn}_seq" RESTART WITH ${max + 1};`, { transaction });
  }),
  down: () => Promise.resolve(),
};
