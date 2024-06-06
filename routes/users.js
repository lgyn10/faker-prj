var express = require('express');
var router = express.Router();

const { faker } = require('@faker-js/faker');

//! 한 개의 랜덤 데이터 생성
router.get('/', function (req, res, next) {
  const fakePerson = {
    userId: faker.string.uuid(),
    email: faker.internet.email(),
    userName: faker.person.fullName(),
    phoneNumber: faker.phone.number(),
    // phoneNumber: faker.helpers.fromRegExp(),
    gender: faker.person.gender(),
    birthDate: faker.date.birthdate(),
    jobType: faker.person.jobType(),
    registeredAt: faker.date.past(),
  };
  res.status(200).json(fakePerson);
});

//! num 개의 랜덤 데이터 배열 생성
router.get('/multi', function (req, res, next) {
  const cnt = parseInt(req.query.num, 10);
  const fakePerson = () => {
    return {
      userId: faker.string.uuid(),
      email: faker.internet.email(),
      userName: faker.person.fullName(),
      phoneNumber: faker.phone.number(),
      // phoneNumber: faker.helpers.fromRegExp(),
      gender: faker.person.gender(),
      birthDate: faker.date.birthdate(),
      jobType: faker.person.jobType(),
      registeredAt: faker.date.past(),
    };
  };
  const results = Array(cnt)
    .fill()
    .map(() => fakePerson());
  res.status(200).json(results);
});

module.exports = router;
