'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users',
      [
        {
          id: 1,
          userID: "U1001",
          username: "user1001",
          password: "$argon2id$v=19$m=65536,t=3,p=4$cxFh7tii+4MZI841JPuP0A$dddW+1XpJ9FeXyettIp0+Ms5v8bCmyQZUjFZ8S6qrD4"
        },
        {
          id: 2,
          userID: "U1002",
          username: "user1002",
          password: "$argon2id$v=19$m=65536,t=3,p=4$tzGB3SfKwXWri2HwM4CLlw$NUYbc4JYWihcqw1Ac4Sw/9XXwGcdSVublZrFs2ZGeks"
        },
        {
          id: 3,
          userID: "U1003",
          username: "user1003",
          password: "$argon2id$v=19$m=65536,t=3,p=4$OGeBRnxC+eKGPptSDf3j3Q$wQws8KBYylFLTJ0BKvtO8ef5gxQwltHWL8GpCk7SJ+8"
        },
        {
          id: 4,
          userID: "U1004",
          username: "user1004",
          password: "$argon2id$v=19$m=65536,t=3,p=4$RDLV3A4zhTt3mqGHQPIugA$/NSxcMQ2O6+KEKENBdjZ6G615mEEVZJB85XhGBY7tx0"
        },
        {
          id: 5,
          userID: "U1005",
          username: "user1005",
          password: "$argon2id$v=19$m=65536,t=3,p=4$P6RwjFt00uCFCDwM2G6kXg$zJWayHlYDnBAKW5GHK3380Z3JxjIARYaLBMvqLD0D34"
        },
        {
          id: 6,
          userID: "U1006",
          username: "user1006",
          password: "$argon2id$v=19$m=65536,t=3,p=4$Gb68mbZEaRdrP+FXI+JgDg$K1xVG10gntwQ1ZWzogttyhagwbyIdHondgo5ujzagp4"
        },
        {
          id: 7,
          userID: "U1007",
          username: "user1007",
          password: "$argon2id$v=19$m=65536,t=3,p=4$LySvBAftkk4ZDexP9hSQnA$TjeOOUVCK8OAA0OXxTPS4aYR3ws1b4e34bh6lP9rfv4"
        },
        {
          id: 8,
          userID: "U1008",
          username: "user1008",
          password: "$argon2id$v=19$m=65536,t=3,p=4$6FBFjD1BghqLPHrSIG3cqA$ibu5ZQNQ/WDGWA3W/qMiT8lcOIpsa5Y3yvJFEP1A4Co"
        },
        {
          id: 9,
          userID: "U1009",
          username: "user1009",
          password: "$argon2id$v=19$m=65536,t=3,p=4$dh+d2JooLLotFaVLbjWb0w$3RexMveAIpJqw3j2xgbGTDflNjoXC24WBcLAyKV3qLQ"
        },
        {
          id: 10,
          userID: "U1010",
          username: "user1010",
          password: "$argon2id$v=19$m=65536,t=3,p=4$JT4yhDxjYxxoYpGMIf87AQ$CZZNWQHxqL/Otf/oT1WFurLAzAdWeAI+5PfTRmByMmY"
        },
        {
          id: 11,
          userID: "U1011",
          username: "user1011",
          password: "$argon2id$v=19$m=65536,t=3,p=4$8hYodIY/y2fQqwLP4nx2PQ$lBtb0V2IcLChQ9iS7kymOqn/WsEvy9DrB8d6tWN9pzw"
        },
        {
          id: 12,
          userID: "U1012",
          username: "user1012",
          password: "$argon2id$v=19$m=65536,t=3,p=4$ikPIC6LYBG4pCkFc795OIA$NOmP7iIxhJKkVh3sOoToZJ1gRiOqjwSdmgZqoyZBb3U"
        },
        {
          id: 13,
          userID: "U1013",
          username: "user1013",
          password: "$argon2id$v=19$m=65536,t=3,p=4$NkgHiCgfFdxIrkmPmfilyg$IBcw29Dq1aCYdMjT0o4F0cHkJcuc93QxJ/jPn0BAP4c"
        },
        {
          id: 14,
          userID: "U1014",
          username: "user1014",
          password: "$argon2id$v=19$m=65536,t=3,p=4$41L5jSCRTsfKqI+KPc069w$p0qxhNNCaR+xVHK0uC5zTdCPd6sAbGgmjQjPMvefL+E"
        },
        {
          id: 15,
          userID: "U1015",
          username: "user1015",
          password: "$argon2id$v=19$m=65536,t=3,p=4$JGZfw28DhRt7So4uSzN55g$QLYSFu5HoLisiZw/oLDpIdfM2CfhUe7Jf1g7hOkRHbw"
        },
        {
          id: 16,
          userID: "U1016",
          username: "user1016",
          password: "$argon2id$v=19$m=65536,t=3,p=4$M6l3rlHxaqdA6Wb7Kg8Jeg$fkCRDGVORFtuE0zxDwAZOwSCGDlYYEtysGgVtCdTiKc"
        },
        {
          id: 17,
          userID: "U1017",
          username: "user1017",
          password: "$argon2id$v=19$m=65536,t=3,p=4$zZYTJgqhED+yv0lp6dBr6w$vx2bJkt+2lQk4eTf2mUgrScMTYh3fdCYvB0izkufrHs"
        },
        {
          id: 18,
          userID: "U1018",
          username: "user1018",
          password: "$argon2id$v=19$m=65536,t=3,p=4$itTU6KFYI/E0vTzppYLxiQ$b1dQTxpWvg1aKLLj7hqOJqBp4oHdOQi+JKx31vLn/cg"
        },
        {
          id: 19,
          userID: "U1019",
          username: "user1019",
          password: "$argon2id$v=19$m=65536,t=3,p=4$Ox1BJ9hxgp48xIukCv+T6A$890gqdLCtALKUyXPsaO0eXdo373ufFIc77xOcfWHRKs"
        },
        {
          id: 20,
          userID: "U1020",
          username: "user1020",
          password: "$argon2id$v=19$m=65536,t=3,p=4$7xJg+z+o4AGilB03BUio+w$yhjIM8eNtHIMQuqp4d5u/zZSxjH/oszAigbaj0/NCek"
        },
        {
          id: 21,
          userID: "U1021",
          username: "user1021",
          password: "$argon2id$v=19$m=65536,t=3,p=4$r2ftKcThEaY91TeyXbpfBQ$fUP01PbK/OdXWZIfKdb1XH10Fh57Tlswz/6F76EPD5k"
        },
        {
          id: 22,
          userID: "U1022",
          username: "user1022",
          password: "$argon2id$v=19$m=65536,t=3,p=4$7i4FDtkkjWkhY98HuQ3CmQ$/Kd30PP8N8MZa9ilgt55r2ZzfgVdBRNjw7I9HLpCU+c"
        },
        {
          id: 23,
          userID: "U1023",
          username: "user1023",
          password: "$argon2id$v=19$m=65536,t=3,p=4$M/FqHeJiPleYqRwjN7smAA$YEVFpWSGIMDMn1l5KIc47u26tkyHFwxzRTX7zDL9JwM"
        },
        {
          id: 24,
          userID: "U1024",
          username: "user1024",
          password: "$argon2id$v=19$m=65536,t=3,p=4$B9xDygCGCh1UGwBZaPWBTg$tF3S2pIRK3wr0Em5mpL7UD9RDRI3IBw7ELw3+GvAnpY"
        },
        {
          id: 25,
          userID: "U1025",
          username: "user1025",
          password: "$argon2id$v=19$m=65536,t=3,p=4$46FZoBJSpS3+TAz+nLc+dw$eWG83+VczpZ/JfEJy49blK4e1UnrdGiPyZNNLGVBVwU"
        },
        {
          id: 26,
          userID: "U1026",
          username: "user1026",
          password: "$argon2id$v=19$m=65536,t=3,p=4$wne8rTAtjL3ZoRJc9rVx/Q$S0wmb28t/4ESODPOt55PhvQuE9WnDLaQCy8Wi8ctdQE"
        },
        {
          id: 27,
          userID: "U1027",
          username: "user1027",
          password: "$argon2id$v=19$m=65536,t=3,p=4$Br2piK2T+Y6sgpecwsphJg$wSAkDoXmaohZCH1zojCIeoNQNjknwYARxhZw0XoMjrs"
        },
        {
          id: 28,
          userID: "U1028",
          username: "user1028",
          password: "$argon2id$v=19$m=65536,t=3,p=4$/v/y1ZfVknuz+gSx/uJuvg$8sDALQzDP9Zx1NZtiGFsVfs7lCGKCJJq3JdrKRDzqLQ"
        },
        {
          id: 29,
          userID: "U1029",
          username: "user1029",
          password: "$argon2id$v=19$m=65536,t=3,p=4$Jx6+30F+MMESI4RRQX98hw$5Z/bTgyNCzGolFpNV3g8mfzSkeH1t8lU+ZHGQoBzezU"
        },
        {
          id: 30,
          userID: "U1030",
          username: "user1030",
          password: "$argon2id$v=19$m=65536,t=3,p=4$aMW5A/EgEkZE7cvP3X5C5w$OwTDtTBaB8hvoN3HCK0+Sxu5jK0Hc+WMcuNCGloTHEE"
        },
        {
          id: 31,
          userID: "U1031",
          username: "user1031",
          password: "$argon2id$v=19$m=65536,t=3,p=4$fze12iBVR3Ve1Urm9PI02A$zZJCALEVfIRIJU644lEDi6taEIXvQccCLl592iBGd2I"
        },
        {
          id: 32,
          userID: "U1032",
          username: "user1032",
          password: "$argon2id$v=19$m=65536,t=3,p=4$anTPTAIfkcF2NdbYSXurbA$rPnmyna7SHiHQO1+zdnxfogVT2yvnqRPEjXobe78O0Q"
        },
        {
          id: 33,
          userID: "U1033",
          username: "user1033",
          password: "$argon2id$v=19$m=65536,t=3,p=4$0ck6yrHptnqcaI70nX35Dw$BVPwuFWkGY8XMKg6LYsreLfMlwQK/4T9YY0Cq1PI04c"
        },
        {
          id: 34,
          userID: "U1034",
          username: "user1034",
          password: "$argon2id$v=19$m=65536,t=3,p=4$T0wkuCzgNP+RHttFllWwXg$UNaU51WB388SydzaWv9NxNbzEu4EZnQtBQPFgrNMt00"
        },
        {
          id: 35,
          userID: "U1035",
          username: "user1035",
          password: "$argon2id$v=19$m=65536,t=3,p=4$pS1ebDwAsmDvYmOKOw/m3g$2FC0tQiSPNILMUGg4Mgz/4cy9mi6m7sKYlQzHo/mGjI"
        },
        {
          id: 36,
          userID: "U1036",
          username: "user1036",
          password: "$argon2id$v=19$m=65536,t=3,p=4$tQp+PGp3cDfGyBmGfzRpHg$E76KtiJIDnCFaXLoCJ6IjwRRIm4GNNLFAPIu7229bZM"
        },
        {
          id: 37,
          userID: "U1037",
          username: "user1037",
          password: "$argon2id$v=19$m=65536,t=3,p=4$jEJXyfvoomDKDCar2BlWkg$JFmeUIP+h6uqszUbXfg72HARFJ7zVy3FmCYEe+dzn+g"
        },
        {
          id: 38,
          userID: "U1038",
          username: "user1038",
          password: "$argon2id$v=19$m=65536,t=3,p=4$+2bV7Ehv64y7NhnkmSoGUw$X/N41XM/bx2UiLkMJeOfhhQS+YUdzWg7lkrIg47DEhs"
        },
        {
          id: 39,
          userID: "U1039",
          username: "user1039",
          password: "$argon2id$v=19$m=65536,t=3,p=4$2BV+6CsfA8QBpv3Ri5xrDA$tY/X37BLFK7bpCbQ9j6suHuzrqi5RfibMKoao95rVVY"
        },
        {
          id: 40,
          userID: "U1040",
          username: "user1040",
          password: "$argon2id$v=19$m=65536,t=3,p=4$uAQDfTINB6SlcEcqGjgPWQ$V7WozKq1K47qTL50CoCLZ5wh55flx5lHaPBmOYB0tQw"
        },
        {
          id: 41,
          userID: "U1041",
          username: "user1041",
          password: "$argon2id$v=19$m=65536,t=3,p=4$+iaC2AGYJ//YL2aU8PyIVg$MMuxeklI2vsI5FD7IVQDys8Gx8cjOSsEScmb2c1vnDM"
        },
        {
          id: 42,
          userID: "U1042",
          username: "user1042",
          password: "$argon2id$v=19$m=65536,t=3,p=4$2cYjJ9JfCk4ZYG6KRkR3/A$Dbb9Xu9WFpeZTVgjSq9sJO0OlMs5jO/Yujs2Vi9V2Jc"
        },
        {
          id: 43,
          userID: "U1043",
          username: "user1043",
          password: "$argon2id$v=19$m=65536,t=3,p=4$yeVXqUAOBzDf1zLQFgOQrg$wsaiO2wXHY29z+v9w00LB3QYrP8eJjx3/OeiYIepkA8"
        },
        {
          id: 44,
          userID: "U1044",
          username: "user1044",
          password: "$argon2id$v=19$m=65536,t=3,p=4$E9DQoF+bYHjHgGfcy6eP0g$OeeNUAVLbCntoaeY5vL044R93RJWVhUr9PKaEBIEfwA"
        },
        {
          id: 45,
          userID: "U1045",
          username: "user1045",
          password: "$argon2id$v=19$m=65536,t=3,p=4$1/WCydE+F1Uwf4378Vp2GA$42eBRcVjmy7jjV0Z2JVVuaxAMKOdd3ZXLg8Z4FQF+pM"
        },
        {
          id: 46,
          userID: "U1046",
          username: "user1046",
          password: "$argon2id$v=19$m=65536,t=3,p=4$z3lPxbnxccQG6Pz5L4XAyw$Jjxwvk8JRSRPRR640JTO3fznS9leh8xQWZ9vFCgKdgU"
        },
        {
          id: 47,
          userID: "U1047",
          username: "user1047",
          password: "$argon2id$v=19$m=65536,t=3,p=4$0Mm66JIZvRBV+63Y0sCjMA$MjuHfvVrnU3sGXUhRvy3Wi5UBLc+bIlKRXF6A21D1BQ"
        },
        {
          id: 48,
          userID: "U1048",
          username: "user1048",
          password: "$argon2id$v=19$m=65536,t=3,p=4$037LZ0tm1SDwe+6f4Gx+wQ$WmPY7GjAvWZtzrKlOQ4iH0MKDcQz1SVeAzGBsftGH8Y"
        },
        {
          id: 49,
          userID: "U1049",
          username: "user1049",
          password: "$argon2id$v=19$m=65536,t=3,p=4$YAgyfiLqlmTTi5m/CadVEw$HlHQp7RCoRB3PAjtvT4EXHrJUt6s935PXpZe1yrTjpo"
        },
        {
          id: 50,
          userID: "U1050",
          username: "user1050",
          password: "$argon2id$v=19$m=65536,t=3,p=4$GHdNVRR9bKY72Ke+OVt8GA$bLQGCi3umGZ7YuklfaNBpot2oXaagQmCdx43Uid6GdI"
        },
        {
          id: 51,
          userID: "U1051",
          username: "user1051",
          password: "$argon2id$v=19$m=65536,t=3,p=4$SCHhFwWLo2h8n0iTaqX4xg$Jpbcq17rLpvWQnpfBm6kOIySQQZShSfpvDf2gy4M03A"
        },
        {
          id: 52,
          userID: "U1052",
          username: "user1052",
          password: "$argon2id$v=19$m=65536,t=3,p=4$Egcti1I4kqigZIOntHbrsg$0BxARwDt7TeRIDp+O3CVCi84bfxhQ08WSIHR0oq4hRk"
        },
        {
          id: 53,
          userID: "U1053",
          username: "user1053",
          password: "$argon2id$v=19$m=65536,t=3,p=4$8GV6cDp3ozOPnQHluEObLg$Ohtjvx26JH1WdOOV5baHBOLDwBAqq6IfJFhTelT6gb4"
        },
        {
          id: 54,
          userID: "U1054",
          username: "user1054",
          password: "$argon2id$v=19$m=65536,t=3,p=4$NiYAYeVqz1ORDrq7BvM/0Q$o7/7y5NuDef2cdoLmO01F+yZ1BWvaiDK3uMHpNAJUNo"
        },
        {
          id: 55,
          userID: "U1055",
          username: "user1055",
          password: "$argon2id$v=19$m=65536,t=3,p=4$aD1rWmiDmXoOxGw7OGwIQQ$Cy1MIGXbuOBnrCHOFdSll6eJUWeENQCoStbyocMeJ/M"
        },
        {
          id: 56,
          userID: "U1056",
          username: "user1056",
          password: "$argon2id$v=19$m=65536,t=3,p=4$jbU2WudZwCy6MWdQRu4Png$Lp9ylqFqwHypGWdAi/OS0JZGqXA1ZmaTn9MaH3ypRkU"
        },
        {
          id: 57,
          userID: "U1057",
          username: "user1057",
          password: "$argon2id$v=19$m=65536,t=3,p=4$3cK9AqtOmCJDo6nete/Asw$4B/V8vaq7hGZrUNrQhItBsv2v1bZ7pKfoQ9OCzQn/uU"
        },
        {
          id: 58,
          userID: "U1058",
          username: "user1058",
          password: "$argon2id$v=19$m=65536,t=3,p=4$z8fxczTXoNtOzBWg3rwV9A$Yy44S23UX6s7BxOQokR2ShrmaqFZ/pPv5UHhpbZkWZc"
        },
        {
          id: 59,
          userID: "U1059",
          username: "user1059",
          password: "$argon2id$v=19$m=65536,t=3,p=4$6M4hYNiu/QrPdw3zg4l4vQ$V5Ik5LU7uwImvUykGgH6ilBfLZGlI89V+kZe8O6OOR4"
        },
        {
          id: 60,
          userID: "U1060",
          username: "user1060",
          password: "$argon2id$v=19$m=65536,t=3,p=4$gg80MfwcgEvrNMFCAz848A$Oc/o3mfX0Q4AzxQvyv5GwVB33Gd75UGBXQxo0oX93uE"
        },
        {
          id: 61,
          userID: "U1061",
          username: "user1061",
          password: "$argon2id$v=19$m=65536,t=3,p=4$muuWRdc/jyIqulsyn0oXuA$dmuhV+uaHHIgXhfRCX6R5lWF9wsUchsyaOhyZ8Ru+WQ"
        },
        {
          id: 62,
          userID: "U1062",
          username: "user1062",
          password: "$argon2id$v=19$m=65536,t=3,p=4$g69j+/sVG2RX7id62nM8dw$APiITOhSqGdt5ubqfdLlnq4ZvuNE+UiNOwOlHlNpScg"
        },
        {
          id: 63,
          userID: "U1063",
          username: "user1063",
          password: "$argon2id$v=19$m=65536,t=3,p=4$5tZFfaYDPf0oI3CjT2OxQQ$iDz9BsKYef7JpnkQ4o8ubXKV3aS0CZe3DjEy1vfnNHA"
        },
        {
          id: 64,
          userID: "U1064",
          username: "user1064",
          password: "$argon2id$v=19$m=65536,t=3,p=4$Pm/sVcc2B5h8avB1angs/A$1vmVepPLSErW8Av63RVgov81fChaIcvC+iJGxNIYoCw"
        },
        {
          id: 65,
          userID: "U1065",
          username: "user1065",
          password: "$argon2id$v=19$m=65536,t=3,p=4$44gAUA3oOpEQGbHcrwbDKA$nYAKxg6Xvcx02KUvZNiuiDt64GnDX6kQ0Y79HRKSM9w"
        },
        {
          id: 66,
          userID: "U1066",
          username: "user1066",
          password: "$argon2id$v=19$m=65536,t=3,p=4$nfJdOSM6V3QrK95HcRraqw$gV/8xBsvqCnawS5IXIQibPf7uTPm/Y+bXXuMvcd519I"
        },
        {
          id: 67,
          userID: "U1067",
          username: "user1067",
          password: "$argon2id$v=19$m=65536,t=3,p=4$uvc//hh/wcyRQL4Xnro0Lg$T7fUluvU+E+WrsVbakG1QHfCUZOTMdak5lXv7aP0XFg"
        },
        {
          id: 68,
          userID: "U1068",
          username: "user1068",
          password: "$argon2id$v=19$m=65536,t=3,p=4$c3G49XzSH3zt9+/GOLsVuQ$ZRK9xVGeua0vBIz7t5L6naPvY3kWUrWNW2HHOXZTmkY"
        },
        {
          id: 69,
          userID: "U1069",
          username: "user1069",
          password: "$argon2id$v=19$m=65536,t=3,p=4$zWmXZlKr7Z8JVwRwZMEYaA$o3tvPOSSvj93HSLwb14HBY5eJdtErmvUQEewvLAKVbQ"
        },
        {
          id: 70,
          userID: "U1070",
          username: "user1070",
          password: "$argon2id$v=19$m=65536,t=3,p=4$LQOLNvF5GnleSbD8WpDiNA$6+CXYPGFJKFStLntoAr2xNrFz7gr8XNWsGqtXC1bcF0"
        },
        {
          id: 71,
          userID: "U1071",
          username: "user1071",
          password: "$argon2id$v=19$m=65536,t=3,p=4$1gkxlHUXocYa18ukbyrFzw$8yA/AccgsjTsnxkT4JGfHZ0hNYoimO6wCs+NsqgZlTY"
        },
        {
          id: 72,
          userID: "U1072",
          username: "user1072",
          password: "$argon2id$v=19$m=65536,t=3,p=4$1Xb0MHucgi5JuCm4sXGTfw$DCIjuk5lOAvhLOO17uNHeLUrR1mZKEfx5GmbfZ+rM54"
        },
        {
          id: 73,
          userID: "U1073",
          username: "user1073",
          password: "$argon2id$v=19$m=65536,t=3,p=4$ZOOF0TNVxnOHmGEVLyyd3w$bfa3Sz45sKFtK6uImposhIHvt815fzHI33tjtMGZxYA"
        },
        {
          id: 74,
          userID: "U1074",
          username: "user1074",
          password: "$argon2id$v=19$m=65536,t=3,p=4$GOGnOVIdaV7dtByV+tUX8w$cFv4cnFhLJyD+7dRt8mRylKVR8R5/xZHNYcIukL/VZc"
        },
        {
          id: 75,
          userID: "U1075",
          username: "user1075",
          password: "$argon2id$v=19$m=65536,t=3,p=4$+eAvPvQynEWlwLhJxEhuzw$Xk91lqpvQqQVV2+l2alN3C46MCubRW2kNsVOTScxg3I"
        },
        {
          id: 76,
          userID: "U1076",
          username: "user1076",
          password: "$argon2id$v=19$m=65536,t=3,p=4$Hiuq7dCHiibUYS/YkevEWg$qg3c2ouKg+GyXARVe45jprmnPyl3/Mmcd0JNmh2Ru8c"
        },
        {
          id: 77,
          userID: "U1077",
          username: "user1077",
          password: "$argon2id$v=19$m=65536,t=3,p=4$4j/lZoo7/BdbMyh3wgYgAA$f3w6M4xuGl4O7oGkDJO9SR5lGi4PwcsKvQgVZ8csA5E"
        },
        {
          id: 78,
          userID: "U1078",
          username: "user1078",
          password: "$argon2id$v=19$m=65536,t=3,p=4$wtlJ7VQjO1ey40rJEp7beg$3kkjdpDD7WxzdoUXMWywqRLbST9tl+1bwOtYg3qrkyg"
        },
        {
          id: 79,
          userID: "U1079",
          username: "user1079",
          password: "$argon2id$v=19$m=65536,t=3,p=4$GXQd4g/NTJHYZA/TFIUmCg$2J3uBRVYwDBjY+LUXAmT88KH0NGKg1B9TMiqf5hwSu0"
        },
        {
          id: 80,
          userID: "U1080",
          username: "user1080",
          password: "$argon2id$v=19$m=65536,t=3,p=4$SnkGDTpeM9oszw0QDbQuFg$c7rJaeBVIsL0XGs9m+u853P/6N2TxPuarzwab6R+ssA"
        },
        {
          id: 81,
          userID: "U1081",
          username: "user1081",
          password: "$argon2id$v=19$m=65536,t=3,p=4$SkKjrSFMAvEVF9xnrJRryw$xG/GLn8ItNGJc3onRecJ3Qy+cmrrAWrnltUlSR0pwS8"
        },
        {
          id: 82,
          userID: "U1082",
          username: "user1082",
          password: "$argon2id$v=19$m=65536,t=3,p=4$LxTVL5Lf828jlXutRFQmYA$/4MuHkiz2tIk3SUpHfqs0rGRijOE8jlzSmAVkB//7I8"
        },
        {
          id: 83,
          userID: "U1083",
          username: "user1083",
          password: "$argon2id$v=19$m=65536,t=3,p=4$n2+BmtbygcNF/cxU2LCnQA$58zOOnL31E+KS11iIhYoNvQaIPaShTWgdNbkw9P2+1E"
        },
        {
          id: 84,
          userID: "U1084",
          username: "user1084",
          password: "$argon2id$v=19$m=65536,t=3,p=4$cJfJ/8OnV2EySQc1gmUbWA$rBoSDEUigm8/tOMR2tIgyG6ddnMJzwsOOnw/qA0o9fo"
        },
        {
          id: 85,
          userID: "U1085",
          username: "user1085",
          password: "$argon2id$v=19$m=65536,t=3,p=4$vRtKRqc0rI5K2gG3qszKbA$HFt+EA4u8U7CGy79Vyx5MHJbFg4Vr0eiXz84+eII37w"
        },
        {
          id: 86,
          userID: "U1086",
          username: "user1086",
          password: "$argon2id$v=19$m=65536,t=3,p=4$JGGorDy4bnEcvr8neUpp5g$r/iM0y+KankPjpetUWfewNSPFdWwg8nKbn/bIkv/cx4"
        },
        {
          id: 87,
          userID: "U1087",
          username: "user1087",
          password: "$argon2id$v=19$m=65536,t=3,p=4$CK4DfGI+iGDMWrEIlwDgDA$TCQMZEB+EoxjEAV3qanPvDZEBqMxMVw/tSuKNH6Caic"
        },
        {
          id: 88,
          userID: "U1088",
          username: "user1088",
          password: "$argon2id$v=19$m=65536,t=3,p=4$uhSgOmPwxPN5SLInCJdguw$5u7Q0og6YqNGeOUyHmhM6f//xkouYsnvreEM9epWOs0"
        },
        {
          id: 89,
          userID: "U1089",
          username: "user1089",
          password: "$argon2id$v=19$m=65536,t=3,p=4$Ovl3KNl8fkH75qMHZC1MWA$AicJUaVgHUtZ4hbzXcc7QFMThzfOlm8ahZVIBHCII/w"
        },
        {
          id: 90,
          userID: "U1090",
          username: "user1090",
          password: "$argon2id$v=19$m=65536,t=3,p=4$Qnzw/m4SWCwmOP8mc2HrWg$GO1PbksCm3+XP84CR/4NeflVVKbtNGHCLxuBmL1ho1o"
        },
        {
          id: 91,
          userID: "U1091",
          username: "user1091",
          password: "$argon2id$v=19$m=65536,t=3,p=4$hAYaXwiG+5gNw1YozDP+fQ$vhPhNwfocNmKX/rM+R0Tb/f2tVs33kJ4hScvuRCByQo"
        },
        {
          id: 92,
          userID: "U1092",
          username: "user1092",
          password: "$argon2id$v=19$m=65536,t=3,p=4$gf7GkVnf/Imwqocj67LnEg$I7i0WYi76RYYVve3it76kacxXHVJPvhBVh4IeELSQi0"
        },
        {
          id: 93,
          userID: "U1093",
          username: "user1093",
          password: "$argon2id$v=19$m=65536,t=3,p=4$EVLw4NtM6qEMEsxHUG6VRQ$rlB6ctk4708hOkWF2w0x6kpWQJT67i/XERnopt6xuDo"
        },
        {
          id: 94,
          userID: "U1094",
          username: "user1094",
          password: "$argon2id$v=19$m=65536,t=3,p=4$ueylmIVCy2Sz7eWxyotJgA$9CVWUckDLFz8tuPRj6RCqXHXxXxh3HSaOkjZkjU+GgE"
        },
        {
          id: 95,
          userID: "U1095",
          username: "user1095",
          password: "$argon2id$v=19$m=65536,t=3,p=4$UtYspEjaxbNnWo6fuae2vA$3D3LxuztnCdSr4zbjlTyNb29rRvWYz1m/3uaAQuIN2o"
        },
        {
          id: 96,
          userID: "U1096",
          username: "user1096",
          password: "$argon2id$v=19$m=65536,t=3,p=4$gRFDTiSjmJl5Act6btsF9Q$nDc7EWVAp0wS3AThRKOQfx8uvJPJgAYy7ngSs8SHRnk"
        },
        {
          id: 97,
          userID: "U1097",
          username: "user1097",
          password: "$argon2id$v=19$m=65536,t=3,p=4$q3hSlW3GAwb5+p4p7sCkdQ$S/AHPn0kbke6d5Ja3IxGKLHneq/D5t4r3rOx+IYkS9Y"
        },
        {
          id: 98,
          userID: "U1098",
          username: "user1098",
          password: "$argon2id$v=19$m=65536,t=3,p=4$ZU9wCzYpVkODa6pLO9xYFQ$brSbt8q3plU3zBdvS6sNWevceHRs6QnBrOhqyAwDRHQ"
        },
        {
          id: 99,
          userID: "U1099",
          username: "user1099",
          password: "$argon2id$v=19$m=65536,t=3,p=4$myeEvQDzC1tyxOt3x6ma/A$GdjHMAO1JU4/3n6+sRUCBqqtbSHxYW0LML1ZqHEpCPc"
        },
        {
          id: 100,
          userID: "U1100",
          username: "user1100",
          password: "$argon2id$v=19$m=65536,t=3,p=4$R5FxidVOiAxPCy3pD45VOw$5GlDKxRZJTgTMUr7N6LGv1ETxACHXX+Jpv75YzDFeMA"
        },
        {
          id: 101,
          userID: "U1101",
          username: "user1101",
          password: "$argon2id$v=19$m=65536,t=3,p=4$g2ZtnDUL8xepT0j5sO/yxA$hphGIT1kzNHI5UV+GKp3raDQlmsD4INAR8od5SB917s"
        },
        {
          id: 102,
          userID: "U1102",
          username: "user1102",
          password: "$argon2id$v=19$m=65536,t=3,p=4$UYFr8R+k4D5e97STaDV6hg$VUAf2D5f8sTCtKcjX/5DmtKNLzyfdQLoGq62Ij6lZXA"
        },
        {
          id: 103,
          userID: "U1103",
          username: "user1103",
          password: "$argon2id$v=19$m=65536,t=3,p=4$5dLYjS7riLJkHRVupts7Sw$v1KzwJlClt0P/RZXKPQNm8M+fLfGcOKeXs7rRwhonHY"
        },
        {
          id: 104,
          userID: "U1104",
          username: "user1104",
          password: "$argon2id$v=19$m=65536,t=3,p=4$QKCUw7K9QnUfOKWxH6AGig$W8yfnpWZrK/+HzVJOv+n7Ld63CADYMmA2PUVlUlR934"
        },
        {
          id: 105,
          userID: "U1105",
          username: "user1105",
          password: "$argon2id$v=19$m=65536,t=3,p=4$Vqe8aedgV/hfOVmoF5VrvQ$pEQu+9JAl6q340tk+J1YwWqCbxFisOV7lMni9StpjjE"
        },
        {
          id: 106,
          userID: "U1106",
          username: "user1106",
          password: "$argon2id$v=19$m=65536,t=3,p=4$y1Nwd2r/P1QAISH1IPFigg$s13/xQF/VoXRzJOQQ38rVP1aEJe+llO3f2AJQkI0HEY"
        },
        {
          id: 107,
          userID: "U1107",
          username: "user1107",
          password: "$argon2id$v=19$m=65536,t=3,p=4$aU6q8Bkcfi2JYztepVMong$c+tbi0h/16H0FG18yVOWzIUq99k9Ypa8GR9+6A25Yy0"
        },
        {
          id: 108,
          userID: "U1108",
          username: "user1108",
          password: "$argon2id$v=19$m=65536,t=3,p=4$T6rBn/YpQRExJ4O5n2qeRg$dEE4rg37VDl/2Yh1DiwoVq+Blzzs601E0H/rEOKe/U4"
        },
        {
          id: 109,
          userID: "U1109",
          username: "user1109",
          password: "$argon2id$v=19$m=65536,t=3,p=4$2Cb+QyyCeX12eY0S+dARVQ$1TnXB+srHbqht1wJzwFriVtOs2ivdR/bhQLm9NMwGK0"
        },
        {
          id: 110,
          userID: "U1110",
          username: "user1110",
          password: "$argon2id$v=19$m=65536,t=3,p=4$ePHKLeG/PelFLN9QiADazA$dAukREOHhs4MrhEimADXsxCyZtGca86buWbeV7xSvgM"
        },
        {
          id: 111,
          userID: "U1111",
          username: "user1111",
          password: "$argon2id$v=19$m=65536,t=3,p=4$kkBOYZX5zrcljsdHN/TiWA$xL1fb44bUJYcIAsjw5Df1MlXn+6iMBk6OsKxY5y0MoA"
        },
        {
          id: 112,
          userID: "U1112",
          username: "user1112",
          password: "$argon2id$v=19$m=65536,t=3,p=4$gH3CjChxjgdlZxobZUmV4A$gw1KEarXtQpIsL9SZzmfST0BjrVEKIhfRMEaO9uvMR0"
        },
        {
          id: 113,
          userID: "U1113",
          username: "user1113",
          password: "$argon2id$v=19$m=65536,t=3,p=4$ODby1HVvTlBDIuKS2s/SFA$ksuhnEr+M09egXHR32SQBOI7Nkgd+gKOq5xbYfVCgYg"
        },
        {
          id: 114,
          userID: "U1114",
          username: "user1114",
          password: "$argon2id$v=19$m=65536,t=3,p=4$1zmVjOARfkECYz1et4VlYQ$RNA+X1rX0x8Aoim+YXVlPUGxTGryfc9E8Hmx466pplk"
        },
        {
          id: 115,
          userID: "U1115",
          username: "user1115",
          password: "$argon2id$v=19$m=65536,t=3,p=4$7M6VZJxOSs0SRwZfwjcHfQ$WrgYEQWRG/Fqmfgh2I9VcIrWyukidVOo9afHBpBXxrc"
        },
        {
          id: 116,
          userID: "U1116",
          username: "user1116",
          password: "$argon2id$v=19$m=65536,t=3,p=4$IfPJCvD99nt4GEzE7khKUA$PPmGzWASS/aDzgAerxOcRv0WYaiSoBzchjNpdVlVunI"
        },
        {
          id: 117,
          userID: "U1117",
          username: "user1117",
          password: "$argon2id$v=19$m=65536,t=3,p=4$2rdxfDZWX+IsSJ+v6F/v5g$ZIq3kkf5lLrDzjAGvl6NMI2OWQMQunTSSCaM6ZjKOuE"
        },
        {
          id: 118,
          userID: "U1118",
          username: "user1118",
          password: "$argon2id$v=19$m=65536,t=3,p=4$cwUgmDxfbIQWuooXVtJZbQ$9geCCGdvskhfPic2E2ZjxlK8pAzqJ5rrAEgJBGX+Yq4"
        },
        {
          id: 119,
          userID: "U1119",
          username: "user1119",
          password: "$argon2id$v=19$m=65536,t=3,p=4$sOPPX9txWtDZlMlFhhCx+Q$+P+/sVkRKMwkxQ/WNyBdI+0xGdCQbw7A+o/YTYsoNQk"
        },
        {
          id: 120,
          userID: "U1120",
          username: "user1120",
          password: "$argon2id$v=19$m=65536,t=3,p=4$+jatUan+Xr8QDNiIRQPp+Q$yDELqGKW9Tdjl5XcJspgR6nr7EaBq4EG8E+X8IUP/xY"
        },
        {
          id: 121,
          userID: "U1121",
          username: "user1121",
          password: "$argon2id$v=19$m=65536,t=3,p=4$RPLI+qWTdkFn/1cqeGdkEQ$FdUGmLw1tS9UW5ElSR1srhSdltIkxcjqlh0D1AugMpo"
        },
        {
          id: 122,
          userID: "U1122",
          username: "user1122",
          password: "$argon2id$v=19$m=65536,t=3,p=4$uBHmfA8fgrU9+3g1m/FTgw$ytO0oabmoI/QjGxfLXhb4eMJKD7SfvVHu7krbT/WT6A"
        },
        {
          id: 123,
          userID: "U1123",
          username: "user1123",
          password: "$argon2id$v=19$m=65536,t=3,p=4$6wD5k3lwozsaNxmzQK7EgQ$OjpRuz3ecsGoK3LiOALplqM/f72x8YAIsUShxHnTyjQ"
        },
        {
          id: 124,
          userID: "U1124",
          username: "user1124",
          password: "$argon2id$v=19$m=65536,t=3,p=4$MuFhLgntgqnKl5FL/kpsdQ$5BAL+TE+2sE/q0gnulc7uFL2meHnFrXyrVIvzBXhDH0"
        },
        {
          id: 125,
          userID: "U1125",
          username: "user1125",
          password: "$argon2id$v=19$m=65536,t=3,p=4$AmK4RccvI6gIqCX8pAZOlA$VwJj2oLWyopjznsED6M1aS+HXklfS/gaLdneEMkJqtI"
        },
        {
          id: 126,
          userID: "U1126",
          username: "user1126",
          password: "$argon2id$v=19$m=65536,t=3,p=4$WyaUzYwGMSwy4Av5ePbkbA$VZCENuI3efHN7tuuLysBwHAl75ZypewsT8l53DMF6kg"
        },
        {
          id: 127,
          userID: "U1127",
          username: "user1127",
          password: "$argon2id$v=19$m=65536,t=3,p=4$NPM3XwSTMxyarBVpSbK3sg$GbYYJ9R5uWbZ55hcIPa8PySoBggfnhO54sSP4CHB+CY"
        },
        {
          id: 128,
          userID: "U1128",
          username: "user1128",
          password: "$argon2id$v=19$m=65536,t=3,p=4$lJVY4fIxwaXsQrUZggT1Nw$+6Mhw3Y9Q3WMwtX9JmDpmLfsuJSC+d5lszv1KOHdjO8"
        },
        {
          id: 129,
          userID: "U1129",
          username: "user1129",
          password: "$argon2id$v=19$m=65536,t=3,p=4$R8e4Whdo61R26RxkDpp+8A$/29BTCkNkLHVG6pXSjrLI68YeH/b/wTU/7l7KA8xdFc"
        },
        {
          id: 130,
          userID: "U1130",
          username: "user1130",
          password: "$argon2id$v=19$m=65536,t=3,p=4$SHOMaIOblC7es4XIRsuJEg$8dY/uDNzNLl0CYIIqzCoJeCKV51JueRujOj7rS/q38A"
        },
        {
          id: 131,
          userID: "U1131",
          username: "user1131",
          password: "$argon2id$v=19$m=65536,t=3,p=4$SBdXnyLi+YNayXja410Ufw$4Sb7CqneJvXiwTw8Lr6l6tfsj2CY1xEIaPEIiLxuNto"
        },
        {
          id: 132,
          userID: "U1132",
          username: "user1132",
          password: "$argon2id$v=19$m=65536,t=3,p=4$uzzPmhWZ4AlzS1oXxUSnRQ$WnS7dHyACQdqpsPqAzqNeu3oKDGCwnvuHZg+P9hKWEI"
        },
        {
          id: 133,
          userID: "U1133",
          username: "user1133",
          password: "$argon2id$v=19$m=65536,t=3,p=4$1QPcynibufZSn8/vF6lnKA$Cm65tarrkZvBdaItJcNJdldas7jPdwO7k93kA8U7mHc"
        },
        {
          id: 134,
          userID: "U1134",
          username: "user1134",
          password: "$argon2id$v=19$m=65536,t=3,p=4$f/Al6ONMmyN67S+Q4h31cg$ueO6XSjqIfw1GdqBxUKaeCHqq148aObKfPEK5ikgXYA"
        },
        {
          id: 135,
          userID: "U1135",
          username: "user1135",
          password: "$argon2id$v=19$m=65536,t=3,p=4$40YlGAQJOFfL3780jE2dqA$S678hnM0KRBFKXdRZ5jQ5dDeHB6TI8HeQfCmO0pGRMw"
        },
        {
          id: 136,
          userID: "U1136",
          username: "user1136",
          password: "$argon2id$v=19$m=65536,t=3,p=4$SIObM7qTC5Ae4azmUHVScQ$gzfAH+AAkduI8/6bj4UDMESK+WtuaByndgGu8X9mqK8"
        },
        {
          id: 137,
          userID: "U1137",
          username: "user1137",
          password: "$argon2id$v=19$m=65536,t=3,p=4$5v97eYbIW9jzUpyClpsJ3g$bcnUkKFQLoS0J2y9mCQiEiYbF8xQs3ETMxluHrZr4Ls"
        },
        {
          id: 138,
          userID: "U1138",
          username: "user1138",
          password: "$argon2id$v=19$m=65536,t=3,p=4$Q0ubi+q8bDipySvXu3IKuw$v9heYXP02sx2iCdUU4fByc4PmyqGjKhHYmeBksVdOtQ"
        }
      ]
    )
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
