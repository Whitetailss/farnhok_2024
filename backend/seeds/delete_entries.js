exports.seed = function (knex, Promise) {
   
  
    // Deletes ALL existing entries
      // .then(function () {
        return knex('admin').del()
      // })
      .then(function () {
        return knex('empty_users_table').del();
      })
      .then(function () {
        return knex('event_signup').del();
      })
      .then(function () {
        return knex('migrations').del();
      })
      .then(function () {
        return knex('migrations_lock').del();
      })
      .then(function () {
        return knex('review').del();
      })
      .then(function () {
        return knex('school_contact_info').del();
      })
      .then(function () {
        return knex('school_details').del();
      })
      .then(function () {
        return knex('school_photo').del();
      })
    //   .then(function () {
    //     return knex('school_users').del();
    //   })
      .then(function () {
        return knex('school_video').del();
      })
    //   .then(function () {
    //     return knex('social_card').del();
    //   })
      .then(function () {
        return knex('social_card_photo').del();
      })
      .then(function () {
        return knex('social_card_video').del();
      })
      .then(function () {
        return knex('user_follow_school').del();
      })
      .then(function () {
        return knex('social_card').del();
      })
      .then(function () {
        return knex('school_event').del();
      })
      .then(function () {
        return knex('users').del();
      })
      .then(function () {
        return knex('school_users').del();
      })

    };