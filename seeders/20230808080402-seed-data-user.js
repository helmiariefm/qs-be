'use strict';
const {passwordCrypt} = require('../helper/pwd-hasher')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   const seedUsers = require('../data/users.json').map(el => {
    el.createdAt = new Date() 
    el.updatedAt = new Date() 
    el.password = passwordCrypt(el.password)
    return el
   })
   await queryInterface.bulkInsert('Users', seedUsers)
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', seedUsers)
  }
};
