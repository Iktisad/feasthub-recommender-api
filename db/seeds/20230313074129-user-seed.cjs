"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert("users", [
            {
                id: 1,
                userID: "U1001",
                username: "user1001",
                email: "jbaldock0@redcross.org",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$pu0vAtvEfW4qrgw5Arbtew$zouMxgynE/EFYLFHNXE7pa2LDGI8jj18QzCE1LFCc74",
            },
            {
                id: 2,
                userID: "U1002",
                username: "user1002",
                email: "lcurson1@g.co",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$s00tj/QRsCH5ojIo+InhtQ$Xv8xFNO9IU+lhuj4bzqw0W9AB5lh++0M/YA9F9Bh5wA",
            },
            {
                id: 3,
                userID: "U1003",
                username: "user1003",
                email: "tmcclurg2@intel.com",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$I+WvfROz3HdQg8B7yV6/Ew$040q7bIzZKbQtq4ThsGQ2ZS8jd1HZu61h0jw4BKGpIU",
            },
            {
                id: 4,
                userID: "U1004",
                username: "user1004",
                email: "ciacovaccio3@sitemeter.com",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$BjVjA1lG11krOSH7J0NKrw$SdL7ZOkCJAWyA3J2MEUyuXEFU9GBaUQSiU88I5DIsQA",
            },
            {
                id: 5,
                userID: "U1005",
                username: "user1005",
                email: "cgreguol4@meetup.com",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$BPQDwiAqac0itJio1b+ADQ$mtqNsEzDZTSnA9P03g4RuZt6p9NmT5GBobLdhyz3r/A",
            },
            {
                id: 6,
                userID: "U1006",
                username: "user1006",
                email: "ysamples5@prnewswire.com",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$Jh4DrlZZ48JOmKWZu18UwA$RTAVkvsTJNjfuRu8B1Li9YePHO/doSkT7thveO/Os68",
            },
            {
                id: 7,
                userID: "U1007",
                username: "user1007",
                email: "jlillee6@virginia.edu",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$X+utUr6eUB3QT//ayfbe7Q$h+NQYmvms7x3vVuRnD/ggKeTPPl9AM962L1F0C4RYkQ",
            },
            {
                id: 8,
                userID: "U1008",
                username: "user1008",
                email: "rfodden7@mapquest.com",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$1yndrJOxPxmLphtOdaj0bw$lJ05egcEyBhd7TecM5q/pvb0ge8fL+OrFem7HKeW5ek",
            },
            {
                id: 9,
                userID: "U1009",
                username: "user1009",
                email: "bskirlin8@nature.com",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$fddopN4M+W2n2ElnRJ5DfA$sRltpN39dwM2gRbcMx8Rmubk7TaFTT2ZQHLbAydEkjw",
            },
            {
                id: 10,
                userID: "U1010",
                username: "user1010",
                email: "mferriere9@chicagotribune.com",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$2aB/PRYN/wJg2hlSb8kcSw$vJlE0nEMWGvq7jGdGFASDHFBEei5X/IT8eDBn4xMblY",
            },
            {
                id: 11,
                userID: "U1011",
                username: "user1011",
                email: "aaaronsa@businessinsider.com",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$3z9AQE4DE838kcP/YCv1gg$fSNw55ioeM+6A6w362NTUS2YozywYquGXHczQlEboE0",
            },
            {
                id: 12,
                userID: "U1012",
                username: "user1012",
                email: "pmoylanb@sciencedaily.com",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$tygQAZVUc+y1jLEoVUDFhQ$XKG8GkUWlxpHZC8tNnZeFmLSIxjMhGfkBQdVIQI9MrA",
            },
            {
                id: 13,
                userID: "U1013",
                username: "user1013",
                email: "gspellmanc@businessweek.com",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$2Xqi5BCcnnzSGBEJLivhFg$g1+L8wAtaZirsM6klXefeQxom/jOfuS58VzRZFIoleU",
            },
            {
                id: 14,
                userID: "U1014",
                username: "user1014",
                email: "mcuerd@digg.com",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$cnebBWxQpI0zw/OXdgW7HA$0nu514ZNqsOdQdAEzvGsP/MS7TEpEqqoXgfH7ueJjFU",
            },
            {
                id: 15,
                userID: "U1015",
                username: "user1015",
                email: "bgilstine@mozilla.org",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$HWwzF9pA47wovnvBhRgZjA$X/86Hhwpjh5KVPvZR6VKbM/1i25jCMWetNUSwxrPUE8",
            },
            {
                id: 16,
                userID: "U1016",
                username: "user1016",
                email: "uscoggansf@sina.com.cn",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$XNLy8ct+koEDkAW70qwWyg$GVjgkUMh6a+JdhS31pklZbieNY2BB1SrkwjldAFAM/A",
            },
            {
                id: 17,
                userID: "U1017",
                username: "user1017",
                email: "olockittg@jiathis.com",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$agVPhbqAIGBcjx9kHShxLw$OSS3tpN8gJgUsLd36eS5O5bicHZwyCp1aHc+wBzyBw8",
            },
            {
                id: 18,
                userID: "U1018",
                username: "user1018",
                email: "fkeywoodh@abc.net.au",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$8CbfOnJwJlNjyOnA4xLLSg$3kv/ec/iw8VY4fxwhbhVKZfJQGrM3pboSWtAuKRgrAI",
            },
            {
                id: 19,
                userID: "U1019",
                username: "user1019",
                email: "dcragoei@google.cn",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$wboCBGJOfKTLfwJ+fdupCw$cQ/INnjx85A1Mf8kX3OtAcn3tqt/md2ckivuxE+bVYQ",
            },
            {
                id: 20,
                userID: "U1020",
                username: "user1020",
                email: "rtheseiraj@harvard.edu",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$2HXcRPdY9HP1jJd1zSwrvg$7gPglOkQoNkTiyIMSV6b8FxETVSnnH+tMMN1jfvseno",
            },
            {
                id: 21,
                userID: "U1021",
                username: "user1021",
                email: "hdesportk@nba.com",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$ofeTBCYjuFNbr/8HmCsKKw$3l1V3mz7sdHRubptS4B+LndSVn+y8khOdahYfVeqV48",
            },
            {
                id: 22,
                userID: "U1022",
                username: "user1022",
                email: "bcaldecottl@vk.com",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$kwDQfS6TnvM3F48UGLf7MA$SyA7WO0qEFcDWX6acy164RkrCWh5SvUFb/3jeCG9Ir0",
            },
            {
                id: 23,
                userID: "U1023",
                username: "user1023",
                email: "acarnoghanm@tripod.com",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$niFL3WxM6AUE8zdB98xWkA$c4Ay7CxK9JACcWCK84tIGPyGcZCFF/X/+GY9HD+xF/I",
            },
            {
                id: 24,
                userID: "U1024",
                username: "user1024",
                email: "acappelln@linkedin.com",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$RvLvK2A9xLUtSUULZINF9w$2BVrbvu3nVPhp+Kldlo34EDjDrqgxuRUoAXW8O8l2gg",
            },
            {
                id: 25,
                userID: "U1025",
                username: "user1025",
                email: "mdyzarto@sina.com.cn",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$e7ppR64W5gewhCyl9QgXNg$bbV/fgUnpE3i0mx/E1MvcnSyTgBf9tHcSk32vRVq50s",
            },
            {
                id: 26,
                userID: "U1026",
                username: "user1026",
                email: "wgrindellp@cbc.ca",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$+2bEw6e4otcVi4+dhbQ2RA$pyzQxjE2MA8ZmUdXmtokHoYBRXfSBsf9PnP0LiI4GQs",
            },
            {
                id: 27,
                userID: "U1027",
                username: "user1027",
                email: "panersenq@hubpages.com",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$bFBnP9A2Ai8E647m7PfsZA$HVp7ngJSRsliQ+SaRnkMC2NeIg4XjYol+DtU/IoPlus",
            },
            {
                id: 28,
                userID: "U1028",
                username: "user1028",
                email: "spacer@devhub.com",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$Pll6zQRkJu1WavsxBoM0zQ$rQL7lIYjqKQqYtD9YJ2skBkZnF3yudCo/YmMItoRUSE",
            },
            {
                id: 29,
                userID: "U1029",
                username: "user1029",
                email: "clamerss@prlog.org",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$VsUYT81PtIdlxA2XQr81GA$2OyMpi5Qp0dGb9R15pPKOgTlYXRsqy0qjgffGXX/l8A",
            },
            {
                id: 30,
                userID: "U1030",
                username: "user1030",
                email: "ngrimshawt@ibm.com",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$6GxgXD0sB03gAfhzE5AwjA$hyujlp2TyUxWB2GiKzn+TX69ka5UjsOalF9md+8DLBY",
            },
            {
                id: 31,
                userID: "U1031",
                username: "user1031",
                email: "erunhamu@bbb.org",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$T/JGgHo4eUjYogoPccy9Zw$/dXIby6d+n8k+uzgrWf30tjWU/KqyaXzqy9WAvQKOaU",
            },
            {
                id: 32,
                userID: "U1032",
                username: "user1032",
                email: "oelsmorv@i2i.jp",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$A3gTcje4tYXYp4sovd8POw$Zou5fYaqc8hP9duGc2LQoTaADVR+gGI+yIRwQ16RYU0",
            },
            {
                id: 33,
                userID: "U1033",
                username: "user1033",
                email: "mclinchw@barnesandnoble.com",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$q2kLvOWi5RNJ0NcSogI8+Q$qI2TC4Ev5GLRMnJK3y+XPlT1viR19C5lUg8us/1slkM",
            },
            {
                id: 34,
                userID: "U1034",
                username: "user1034",
                email: "bbarbosax@liveinternet.ru",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$lM+kmfYoL7BJsYQNdYhKAQ$2SWWy07IctctCN3BhA0NVZAYzeVjT3yqOylf4qN0Ghs",
            },
            {
                id: 35,
                userID: "U1035",
                username: "user1035",
                email: "glenahany@nih.gov",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$kszJlBeypVBM+YJn6Qx/Hw$eIPzpNjHGPqBfrJsYNyAzdztNI32BaxoyhSbZ2GH+kw",
            },
            {
                id: 36,
                userID: "U1036",
                username: "user1036",
                email: "hpriestlandz@weibo.com",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$HJ2fleRiGh5oB9IS9/jkpg$Hhj22foB9BVdxO3ti6FZSOaTRErFXwQ7CTmkfC4RxSU",
            },
            {
                id: 37,
                userID: "U1037",
                username: "user1037",
                email: "cisitt10@51.la",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$pSBScJVsjTtITGV4+mtDxQ$5wyimD1TRNqEzqzZ8GrYOe50vLddjeVueZ+l69LHZYk",
            },
            {
                id: 38,
                userID: "U1038",
                username: "user1038",
                email: "kjozefiak11@hud.gov",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$xWiUbsvtUYpSMiM2ex16uQ$ng71k1XeAw0fIslHl7tBF4AQRXtVZDXKX7IoXw0AIOo",
            },
            {
                id: 39,
                userID: "U1039",
                username: "user1039",
                email: "dchess12@washingtonpost.com",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$Z+t+7uheWlurNpkqNOmlZA$/NaPtu7epIBTBzQwonYtQEqHvvXzWOw0Y3Lml54qIGY",
            },
            {
                id: 40,
                userID: "U1040",
                username: "user1040",
                email: "cboice13@europa.eu",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$buGZAqJRGUwnPn1JcCc/EQ$ft2RwcjfD2gh0HsWUofOH/jKLSz7pWXcQcLXVrxl2mU",
            },
            {
                id: 41,
                userID: "U1041",
                username: "user1041",
                email: "mtackell14@typepad.com",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$HBWsYOlOGn8nwsRj9x7XNw$5g8cY5h8xNa6gVgbuubXOwKt9hBCc/gLP7siVoUeliI",
            },
            {
                id: 42,
                userID: "U1042",
                username: "user1042",
                email: "psissens15@so-net.ne.jp",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$8CugNJ/dLUptNaZyeiWayQ$qXCnlCiRAwYjf9KwcfMLUPjwAZf3Dm5U2wXt1adje6w",
            },
            {
                id: 43,
                userID: "U1043",
                username: "user1043",
                email: "ctalboy16@businesswire.com",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$0jkY2QtwM4beRJs5l3TNLg$UFurUJ04e5c/w9+6FCNFZB/9shYJGgxDS4LfVXNxQcs",
            },
            {
                id: 44,
                userID: "U1044",
                username: "user1044",
                email: "phargreave17@prnewswire.com",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$HOJRyZf0r4TaPIjaukli9Q$/3qOZQt98Q5SoNArk0ulJP7f0nGDDjHrdEMMIFmEeJ8",
            },
            {
                id: 45,
                userID: "U1045",
                username: "user1045",
                email: "lkowalski18@fastcompany.com",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$8USLFxfxNTSOQgd8YK5fww$IUNRBXCQZhTIAAyQ/ZvDcmMnJldk3n5LRHSons3KXm0",
            },
            {
                id: 46,
                userID: "U1046",
                username: "user1046",
                email: "pstoaks19@google.it",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$LBL3IGK0A77Gn+bTgriw7Q$/b1jYDOwI4GPZERBNZj/X5ZiYVqeeYnoZDpyL/WRoJc",
            },
            {
                id: 47,
                userID: "U1047",
                username: "user1047",
                email: "iwoodyatt1a@house.gov",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$NSqVH4YixYPeaO/dEs81cA$1zgkn/etIkut6ZDUFBerUwwN6bDxMJsuJmJHTJ5Rvu4",
            },
            {
                id: 48,
                userID: "U1048",
                username: "user1048",
                email: "gpringuer1b@businesswire.com",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$h4DECs5I4L61dn0zHfOo9g$4RZoEAyYwGJHl4MNs0bBQF7opHIzBzTC+0quj18DUlE",
            },
            {
                id: 49,
                userID: "U1049",
                username: "user1049",
                email: "gnaisey1c@admin.ch",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$0QHA/7dPlko4JeIqQgMcHw$BZZnZMy0P6kq8VYZtgTnnOip8lJpHp6oxbN4HKaDLk0",
            },
            {
                id: 50,
                userID: "U1050",
                username: "user1050",
                email: "bkunneke1d@europa.eu",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$AY0b/3rQQuBMkZiC9jygXA$UO8CwNW6qgmfR38qABAcMaK3uQEpTuSxbmG5rjohm5I",
            },
            {
                id: 51,
                userID: "U1051",
                username: "user1051",
                email: "lsiddall1e@liveinternet.ru",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$7BOIIvW8kXV12t9GJcTM1Q$oruJqbwnBYNuLSeMuzGxScQptU8Mpn3//RUANz5XqSc",
            },
            {
                id: 52,
                userID: "U1052",
                username: "user1052",
                email: "epencost1f@123-reg.co.uk",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$xShWdUnrDza2uitkM0qVyg$lSZuoHIOB1BnYtccPkInTeWko7D/lLZ58aCTnIEF9Ig",
            },
            {
                id: 53,
                userID: "U1053",
                username: "user1053",
                email: "ndomel1g@joomla.org",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$hhxmyQnl+Bmx0i0y/b48oQ$NWzlCgpftFpPca5MSi+iqL88jUA+PqHAWNditDSyQkU",
            },
            {
                id: 54,
                userID: "U1054",
                username: "user1054",
                email: "csantori1h@google.ru",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$QLjF27pMrtMwLZTGZNtLjA$aG9rSxmhRUUNPT0C2y4Hh3/ngp0ETJ1hXrcvDXUHbMk",
            },
            {
                id: 55,
                userID: "U1055",
                username: "user1055",
                email: "nmoye1i@whitehouse.gov",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$6ZwG/utyvc4UWPYtf6dvxQ$zSPpAaFTNdlZL6ZstMbLlA2n2NeMqWDDXMd3GM47bd8",
            },
            {
                id: 56,
                userID: "U1056",
                username: "user1056",
                email: "oemanueli1j@vistaprint.com",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$B7CeeAY52yd6q8SeV8vRzA$mWNvqSPUkNTTmFnBPfhQ0fWYpgUWfEWU0b05+w0e8fU",
            },
            {
                id: 57,
                userID: "U1057",
                username: "user1057",
                email: "pmillar1k@dion.ne.jp",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$L/yZWhVTDQWHax24EVLtMA$N9+l7dcpAXwaPDCwk5Y2tPf4wzQoSH25k6t0roLTZy8",
            },
            {
                id: 58,
                userID: "U1058",
                username: "user1058",
                email: "csultana1l@quantcast.com",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$NyeO1TxkyGhU9WEAE0N4PA$aqse07tMvp+MmK0d91LZ+sgeiROoifdyPJoEgB1aau0",
            },
            {
                id: 59,
                userID: "U1059",
                username: "user1059",
                email: "mbowlesworth1m@addtoany.com",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$NfsGiShdWaO8suOuH1ZppQ$wxq79rVpmkRpQiV6anfz3X0kN/iJoaflV/Os9DAL/Vo",
            },
            {
                id: 60,
                userID: "U1060",
                username: "user1060",
                email: "mlaugier1n@hubpages.com",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$hKJGbR0ztb2QxuuMQ6KXhw$roeJ+pGkq67DUSY9+5/QxDUa/g6ETtLQKVmJBhmxAog",
            },
            {
                id: 61,
                userID: "U1061",
                username: "user1061",
                email: "nhardiker1o@seattletimes.com",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$hg6OGiA6Qzo7DmVCIDepgA$QJI345Kd52Qs8tIeyINjYxhrUxcllL38QtjVFWnfuR4",
            },
            {
                id: 62,
                userID: "U1062",
                username: "user1062",
                email: "nmattessen1p@example.com",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$U7GnUjbQMKZaA282tL1liw$svY10egfDDn8GtV9GDQyXoXXUt4to4KRy5KUQafFGw4",
            },
            {
                id: 63,
                userID: "U1063",
                username: "user1063",
                email: "sferguson1q@google.de",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$EcrKqZSpJdl47lLYaDGLEA$MZ8ijX7zCpF6/0/hufdhLcj448BAEaERTBm7F+w2yMM",
            },
            {
                id: 64,
                userID: "U1064",
                username: "user1064",
                email: "mmerkel1r@about.me",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$22sqy7Xv3tsXtqMUfEBW9g$ZTtIqJJNbsQETZoS/3WSiVb+oUBDRzVR84xOToGTYPs",
            },
            {
                id: 65,
                userID: "U1065",
                username: "user1065",
                email: "bnaisbitt1s@istockphoto.com",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$dq2MPF3B605ORNCTfVhmWQ$otB+USQraIh53UXmnwxucvc/3hAcOJE4yc42apgbnuc",
            },
            {
                id: 66,
                userID: "U1066",
                username: "user1066",
                email: "jbullocke1t@vk.com",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$LZw+7P5RXRoVNjkQ05Ra5w$B8VSTvd+cvd3C+Ma5qK7Qqbkw3hPBXBdT27aEw1mliA",
            },
            {
                id: 67,
                userID: "U1067",
                username: "user1067",
                email: "iritchings1u@ucoz.ru",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$0ZGs26KLZVxWLA6jg9ZLNg$Z406mc1ZM/BXY8okoNmorjAIbpZr37vkIEpG1A4Qtzs",
            },
            {
                id: 68,
                userID: "U1068",
                username: "user1068",
                email: "ajeram1v@yelp.com",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$nzJ2VNVYcrOVl2lAK+e9NA$IbgKnZ1AioLgjMPZuIuBvXe8UR5/vn85FTxWeO5CrIY",
            },
            {
                id: 69,
                userID: "U1069",
                username: "user1069",
                email: "rhadley1w@smh.com.au",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$/4rgpcvcmBTn4mdjEKzxMA$t1Sk6Tpyt4mHc2oWTUQCDfdQlEC2uCEcs8SEYxKTYto",
            },
            {
                id: 70,
                userID: "U1070",
                username: "user1070",
                email: "sshapter1x@blogger.com",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$EUmeE0aA8ed68z/6czQ2rw$Nuy6TyBAPd5bqDjiYn+YwUZ4RwmoMhoZGrAQJV/Wd+s",
            },
            {
                id: 71,
                userID: "U1071",
                username: "user1071",
                email: "dzanre1y@smh.com.au",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$DzESTYy5lE3G2HmmSsO+Rw$QSNGMrkvMKMjt5dF6ajsUdw2bLz9iUsgnO5BR/jbJJQ",
            },
            {
                id: 72,
                userID: "U1072",
                username: "user1072",
                email: "lvondrys1z@friendfeed.com",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$dKDC4zqIwx7SRzi+/esQeA$A4Yxt60Mn0J2DubLWcJQ0YlxyRljnOMSUXrnrAqj0cQ",
            },
            {
                id: 73,
                userID: "U1073",
                username: "user1073",
                email: "csansome20@friendfeed.com",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$fEyYYefEzRycnFam7VcUuA$y6iY6Tf5xKxHDWUnOSAB73gOn+GwE+oBiNAFpeQ/xPc",
            },
            {
                id: 74,
                userID: "U1074",
                username: "user1074",
                email: "odeguise21@cmu.edu",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$mNdiGO+IsumYSRoVhbG4Iw$amatzqiK/lHT6ku0w1INCRFAhlP8wYHJF7SspqPsFvA",
            },
            {
                id: 75,
                userID: "U1075",
                username: "user1075",
                email: "shuntriss22@edublogs.org",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$FdWbQ9K+iZdd++sDGIum8Q$C30TuQXlLjWw79bRuu9eWUtHBrQ+k2sMfiayCM92yRg",
            },
            {
                id: 76,
                userID: "U1076",
                username: "user1076",
                email: "aoty23@spiegel.de",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$ZsaCIFozTt7BQvh2Q1vVZw$UKiJI7Xmm0C9cIbm/h3kvdroB+NWiCZO3vkWyYqq90w",
            },
            {
                id: 77,
                userID: "U1077",
                username: "user1077",
                email: "ahothersall24@reference.com",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$zzcXQPJCWQ+DkxXAFi6I6A$1iE+bu9BE5uesXbEnqIm6xukX6PP+iCJcaomHgGPMFw",
            },
            {
                id: 78,
                userID: "U1078",
                username: "user1078",
                email: "fpoynser25@ihg.com",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$GHI8EbsKQhQIPQyZUNG4NQ$djZKO02z4nJmuw3AbDrpi/0bzuTAkNTczPqnBbMkVAs",
            },
            {
                id: 79,
                userID: "U1079",
                username: "user1079",
                email: "hbrakewell26@live.com",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$nJfNr4pzd+jnBIkYOc7f9w$M1juQmuaysGORLZZkvZX9IhHscblsJEhVAG04Y/dLQI",
            },
            {
                id: 80,
                userID: "U1080",
                username: "user1080",
                email: "estyant27@biglobe.ne.jp",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$udF3QTJhSDoaDQGtIIOx9Q$6vl4IdRwN2pJvCwYpNZM0jqg5T4gCHYP9wiYICIhSoI",
            },
            {
                id: 81,
                userID: "U1081",
                username: "user1081",
                email: "cdingsdale28@craigslist.org",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$tUkuknuf5kSzfF9ZPlMw4g$ued727y/qLOT6JE4R4cD+AFOrgEkkLOT+NOqTPOLy1k",
            },
            {
                id: 82,
                userID: "U1082",
                username: "user1082",
                email: "jjanecki29@marriott.com",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$gPWluI3GtEeUtdWfAXvzMQ$HbR3TnZUoxep8rP6QOR+vfcU8ez7ZiBFALXjDIVCYBI",
            },
            {
                id: 83,
                userID: "U1083",
                username: "user1083",
                email: "pdarnbrough2a@samsung.com",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$Zfzs3Z0z2JJJb0lRCErcFQ$dlYkXBAhDaTdGVTyLah6dOXP6zjgMoWa2v5ENMlr/qo",
            },
            {
                id: 84,
                userID: "U1084",
                username: "user1084",
                email: "dsprade2b@blog.com",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$vo7suw5LQ/xf/zXI0nO4DA$/4Yw/7gyzwU554JZHbQXdeB3/jd5JW1Q1y7+ipUSLgM",
            },
            {
                id: 85,
                userID: "U1085",
                username: "user1085",
                email: "bphair2c@slate.com",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$HKIqNABfrEPlxQqf2K5xeg$5+19BO/Gw5FpeZgqt8sc8/hRfri2qBRrsnpxuDJquI4",
            },
            {
                id: 86,
                userID: "U1086",
                username: "user1086",
                email: "dstibbs2d@miitbeian.gov.cn",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$lXmZE7jUppeX/TVT5NFUpg$kbzzia9lmy3ynFFpfl13wasByi+/GfSlSMYpRJECUAM",
            },
            {
                id: 87,
                userID: "U1087",
                username: "user1087",
                email: "dsugarman2e@chron.com",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$v07zrG8hYi3HNInys0hyNg$NnG/MTiDD07PdZlEuSZVcqlf/pJwqRaySS5IRBTnIho",
            },
            {
                id: 88,
                userID: "U1088",
                username: "user1088",
                email: "ebortolazzi2f@cnet.com",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$mpP2X17iGTN4bnUXafm9/A$DligJeX7NhziGGf5iGcOIiTZ6cQRyO1RNmu7b0u9YbU",
            },
            {
                id: 89,
                userID: "U1089",
                username: "user1089",
                email: "kwaywell2g@desdev.cn",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$4bf+8h0LpCrhtl1tmkignA$+9QyEfJ8c4zUoBysU+0P+VeeKT/ZXQeLh6sLGyP8RT4",
            },
            {
                id: 90,
                userID: "U1090",
                username: "user1090",
                email: "cwhitebrook2h@360.cn",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$0V5AkK//C2kOeePUKldhvQ$uqiUEivZB2qrBK6JwFx3V0pQF467KBb99x09Xd1cLTo",
            },
            {
                id: 91,
                userID: "U1091",
                username: "user1091",
                email: "dmoses2i@stumbleupon.com",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$33IXvNBFE5L52glDz5z4sQ$S4NVhIoOLw9CicRFZ050uHKO+9+4NLoyAtWSGvrpWgo",
            },
            {
                id: 92,
                userID: "U1092",
                username: "user1092",
                email: "ogibbs2j@wordpress.org",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$acB1kL8/t61h2Qf9XCjCtg$fEbLkuHOsD3yFV/PIoA7aV0+MDXU8MFaTsE4Wd4eWLE",
            },
            {
                id: 93,
                userID: "U1093",
                username: "user1093",
                email: "jzannotti2k@geocities.jp",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$JwuTnSY5p+Jjj2jL8LAtFw$E3tk9u3IBMTpaUd9YjHovdYkokI6w9UMP1513gH3JXk",
            },
            {
                id: 94,
                userID: "U1094",
                username: "user1094",
                email: "htomkins2l@jalbum.net",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$In4SWr3l38EZ0AZn5HjtNw$XyLjKoqOCdV3Hn0givUp/OPBoIO1DehJdGc13xLvEwQ",
            },
            {
                id: 95,
                userID: "U1095",
                username: "user1095",
                email: "vamorts2m@oaic.gov.au",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$BIOhzU9H/ORwVAb/EJH8Ag$82AvqBvy8NDhFFOtINgIPqtCz9ChEGUfZMiPAZYMIYI",
            },
            {
                id: 96,
                userID: "U1096",
                username: "user1096",
                email: "lclinch2n@discovery.com",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$qlEin+S9uii9ph2fPp5yGQ$4eyVZKtdz2voZw/1HzpB6DT3d/V7C+sFP4cV6EQhwB0",
            },
            {
                id: 97,
                userID: "U1097",
                username: "user1097",
                email: "rkrabbe2o@indiegogo.com",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$eKNunuUaYEF+OHWRdBA8bg$3yVsvrvxoc2n5Sf9SsHY3v2voUU/yDYQwq1NYEPtjes",
            },
            {
                id: 98,
                userID: "U1098",
                username: "user1098",
                email: "rbogays2p@addtoany.com",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$BHOjCkyvY8VD7inn+BiDtA$wrRKfn/S2yLcCRr9TW0fMHAaOEITSd5QDgEo6rsociI",
            },
            {
                id: 99,
                userID: "U1099",
                username: "user1099",
                email: "btortis2q@whitehouse.gov",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$X1GOkFLypPlWJ6z02oMnjw$yHNUXQu+04JI3oINJA/YGbfmGMBiZFRA1GRocEhoItQ",
            },
            {
                id: 100,
                userID: "U1100",
                username: "user1100",
                email: "gtolmie2r@wikia.com",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$hTw+j46MN62sEg0djMDTHA$fOaQoEbv0Ufu5v8Qg3Fezp8+ZzFO52w7+qdt2bmb2Ck",
            },
            {
                id: 101,
                userID: "U1101",
                username: "user1101",
                email: "jsemiras2s@jugem.jp",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$rMZZmUdMeXR3UsLjdvRI2Q$jNEx+p/UzVF7A+TThyDgxkwz3RFpJYmFBQb2XzZizmI",
            },
            {
                id: 102,
                userID: "U1102",
                username: "user1102",
                email: "cspinella2t@squidoo.com",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$M6jamN1JNkcMxaNFE9n9AQ$xO9gB9uRx4QK7nAXmYvJvzskTE4EdsUE0KPxaMy21TU",
            },
            {
                id: 103,
                userID: "U1103",
                username: "user1103",
                email: "adumberell2u@reddit.com",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$cu7WTF/tAgWiJ/+WZA8QhQ$DU32VZOi6m6UBW0Hmc8x0NGxr1nfd9/v0dxO8aBCHkc",
            },
            {
                id: 104,
                userID: "U1104",
                username: "user1104",
                email: "lsambals2v@blogger.com",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$o1qsMTyJlIHrw2i+QZt9DA$CTISa2cCB0DoBUAyiCC56Y2S6PpFfL+ckdnkVrZhpzc",
            },
            {
                id: 105,
                userID: "U1105",
                username: "user1105",
                email: "mseide2w@privacy.gov.au",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$3Yu5RCJZVScMDZRD7ckvjw$PCjRjKyB83dWcLo0jyLF8Yl8Cf6ms2XWYyHvV0wJCAw",
            },
            {
                id: 106,
                userID: "U1106",
                username: "user1106",
                email: "bpilipets2x@t-online.de",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$XLkffYQO6XHNwmtA1UdoRw$8likYpOIgbsAzqcR63L8GJiEj7MUY3pr83/gdwLwJTg",
            },
            {
                id: 107,
                userID: "U1107",
                username: "user1107",
                email: "lvolcker2y@hibu.com",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$fRFgRJWI9NTYFd1j1/FsQg$WLcjkAzebiJo1SA9vy2PyKPTp3C/zvlckBKjkIYPdSY",
            },
            {
                id: 108,
                userID: "U1108",
                username: "user1108",
                email: "nnardrup2z@uol.com.br",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$mnPEXzTxfCdWXJ1TOL8otA$ctTsMkokGFu928QIKjupI3ZTUgKOl5xEUhLg5M6U+ZE",
            },
            {
                id: 109,
                userID: "U1109",
                username: "user1109",
                email: "aelwell30@usgs.gov",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$V1v8L/0KyH/GsMfvbywO7w$jsh2Jp1+Slp+u0rQcBMCqlcqawDhIsytpWIN5xJvmQE",
            },
            {
                id: 110,
                userID: "U1110",
                username: "user1110",
                email: "iavrahamov31@1und1.de",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$XGAVKraVtMl/7tSxbQNd7g$xmtGQatRUHAGHZPAkk9vZ8AHLWoklo/98xmvc7mbR2c",
            },
            {
                id: 111,
                userID: "U1111",
                username: "user1111",
                email: "gbottrell32@uol.com.br",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$4H45cmk6wKtFPkT0mT1TDA$u19rr6RtRA3XncuBhlHZ6p4RLREXpYV/wjXSuQoJqUg",
            },
            {
                id: 112,
                userID: "U1112",
                username: "user1112",
                email: "dwillavoys33@princeton.edu",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$QeBIoU4EvBhFTrV6USOqyg$lBXb7uvfOlN4tunpRd7J7kh3zupWdcl186MTbAMCKv8",
            },
            {
                id: 113,
                userID: "U1113",
                username: "user1113",
                email: "smeekings34@goo.gl",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$xiYyt/PhaVLraqhvN5Dc3Q$WEu4Xw9DvAc7GfzuELq376SfiDtJL2YbbImVibQZ/F0",
            },
            {
                id: 114,
                userID: "U1114",
                username: "user1114",
                email: "rboyles35@sun.com",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$7/gs+8AuzOROHTauJQ4bYw$SNLm1a0lLdOD/Rk7P9t0SLZ/uLJGpAkT0ckypsPxbNY",
            },
            {
                id: 115,
                userID: "U1115",
                username: "user1115",
                email: "ldubose36@homestead.com",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$UFTeoG1e4jcYCgAbTMfIVA$+qBJ/arSLeun5qjR3ss9yLYhhvEiJqYPA3PFeC5H4J8",
            },
            {
                id: 116,
                userID: "U1116",
                username: "user1116",
                email: "aflorentine37@hugedomains.com",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$L3WUp+51teSqK71u8JDaJg$OVHP3nJkj1wrT8fdmw8FXdP1BnU4uBoZdSzZ5PrQbqo",
            },
            {
                id: 117,
                userID: "U1117",
                username: "user1117",
                email: "lfoffano38@deliciousdays.com",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$gwarc7vlHIGZVUvwIkanNQ$ElFQGDCfEaGdfZ/0ulqQHNZL1j4TfY3XrbZhW200b5M",
            },
            {
                id: 118,
                userID: "U1118",
                username: "user1118",
                email: "bcreffeild39@usatoday.com",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$bzMiVmIJDdpoJx2G868MXA$9zrw2h+gllBXFk/zyysyquxH/IWz3Edp25p3tNMhrZk",
            },
            {
                id: 119,
                userID: "U1119",
                username: "user1119",
                email: "bbullus3a@seattletimes.com",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$CgQMaLwuu9c5ImJ8CoBGAA$aT1MeUenV7f6MBD2X7wxZ+TDS+WsPcIcqrOZpGuMi+k",
            },
            {
                id: 120,
                userID: "U1120",
                username: "user1120",
                email: "gsolland3b@marketwatch.com",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$NR+yyyWS/iJikr9ax3uwwQ$jXN46YUSSkstCm6/44P5UhV5HlwD1n8AtPnF7/jI3sM",
            },
            {
                id: 121,
                userID: "U1121",
                username: "user1121",
                email: "jworswick3c@admin.ch",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$OE1Iwi1Ulj2MdDTBcC0vbw$xbjt/Hbyswr+EzDhZARlfxXammG+/u2+3V8Khny4pzs",
            },
            {
                id: 122,
                userID: "U1122",
                username: "user1122",
                email: "hizchaki3d@statcounter.com",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$h9q5sTsLELa9cE6GKvRsBQ$f4CdAD2F8TJC0zBOzVdgrlQYdeM3kzdQ4ViVKXM1Ph8",
            },
            {
                id: 123,
                userID: "U1123",
                username: "user1123",
                email: "vardron3e@seattletimes.com",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$AT7Laf33F0f5yoO0BsbeIA$DD0AF0QLR0tl6/JfpNN4wrl+VHVzFP0cu0uOH26gK2o",
            },
            {
                id: 124,
                userID: "U1124",
                username: "user1124",
                email: "vbaseley3f@zimbio.com",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$no5S2CT7VU7EUiq2L3Xwyg$w67nrXWZ3EFyGLU+jusye4QYDhrqdW34+KlQ8Z8lcCc",
            },
            {
                id: 125,
                userID: "U1125",
                username: "user1125",
                email: "pboecke3g@eventbrite.com",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$pGX9+HtR4jQLasRXTD9NvQ$JU59cnniuFz/f5nGnbl0DW4iWR0OkJK7qTA/2ajyPH0",
            },
            {
                id: 126,
                userID: "U1126",
                username: "user1126",
                email: "bjills3h@4shared.com",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$gHQhd7QgiLqXDZybFzmS8g$hg0d3NqTlJS6S8rkt230NzVkAhTYuHzHZtdyJlu92bM",
            },
            {
                id: 127,
                userID: "U1127",
                username: "user1127",
                email: "kiacomettii3i@nifty.com",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$+4rPKaOX1WPcduPBwk9e1A$/zCQjLM7AcCb+lASM0BmunEvuL2hqAXr30Z/Lfyfcog",
            },
            {
                id: 128,
                userID: "U1128",
                username: "user1128",
                email: "achesterton3j@google.com.au",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$GhsvOnsgDxKZk4/GzK1oog$Xr2YlWdiXFfcEsof3d8/+rN0OoeTJZwbjO47MMMouFY",
            },
            {
                id: 129,
                userID: "U1129",
                username: "user1129",
                email: "lespada3k@nymag.com",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$xJq/ETegdiZwAUJMQ/0GJQ$ozhsdwz9RkKGDcKAFA72TZ0Ba9r/jIygGTY1z3EMIeI",
            },
            {
                id: 130,
                userID: "U1130",
                username: "user1130",
                email: "mbolter3l@google.de",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$1ns/JXNHXOAbecISgdEAjw$lLOZ/wcOvsewBwQxogjvv67S02RQy6GDMObMNnqEc0Y",
            },
            {
                id: 131,
                userID: "U1131",
                username: "user1131",
                email: "meverly3m@google.ru",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$dXpG0hfxLuycaB7H79VOXg$giHxzbMuwC+JtViq0bngV3lf6RdJj2vfn4UPbSH+5rw",
            },
            {
                id: 132,
                userID: "U1132",
                username: "user1132",
                email: "lgarter3n@cloudflare.com",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$vN5uGUij1vaWkaZHkdABSQ$FxPJDliKhRBy8/FMosjh5eigDJ3ZdOcgCG9UQNQ8vnQ",
            },
            {
                id: 133,
                userID: "U1133",
                username: "user1133",
                email: "fveasey3o@fema.gov",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$lo15KqumSgI/BNVpAv2O7w$+kOc2Bsckx0UcgL7y+BBHB/ArevKmFKVo1vh5KqkcHU",
            },
            {
                id: 134,
                userID: "U1134",
                username: "user1134",
                email: "dbazoge3p@mlb.com",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$H7DYzJRUi9sOEaCHiN/qyQ$LsE/WVUkqdlb0nwTuNctpPdY569SaVO2idLkX+o33wI",
            },
            {
                id: 135,
                userID: "U1135",
                username: "user1135",
                email: "cbissell3q@uiuc.edu",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$IFtCDHAWFyzfhSLMbeYXxA$fZ1aymyKH8eMDTFfotwbpacXiaHyMbYMykprR7S2Ao8",
            },
            {
                id: 136,
                userID: "U1136",
                username: "user1136",
                email: "sschimank3r@upenn.edu",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$fS5dGCp9IUjAIkB4pD/ITg$5BadbCqfi8wwbl1i4HKsSp9Wj4Y+pG1GMmi+N4cxB7U",
            },
            {
                id: 137,
                userID: "U1137",
                username: "user1137",
                email: "rbastow3s@unicef.org",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$liGAiOq3hEmasV40k1j4Qg$qrZBvAz/6AAieeEzfuhUsjPMl7XTMeVXwYwQlJzgdnc",
            },
            {
                id: 138,
                userID: "U1138",
                username: "user1138",
                email: "lphelip3t@google.co.jp",
                password:
                    "$argon2id$v=19$m=65536,t=3,p=4$UZbmfMCDGXElKF2mwOE1+Q$d7KmLHFEw98/7CysQSefCbHYE92/ALVHThZ7K6XxvMY",
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    },
};
