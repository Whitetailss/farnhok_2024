
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  // return knex('school_event').del()

  // // Deletes ALL existing entries
  //   // (function () {
  //     return knex('school_details').del()
  //   // })
  //   .then(function () {
  //     return knex('users').del()
  //   })
  //   .then(function () {
  //     return knex('school_users').del()
  //   })

  // // Deletes ALL existing entries

  //   // .then(function () {
  //     return knex('admin').del()
  //   // })
  //   .then(function () {
  //     return knex('empty_users_table').del();
  //   })
  //   .then(function () {
  //     return knex('event_signup').del();
  //   })
  //   .then(function () {
  //     return knex('migrations').del();
  //   })
  //   .then(function () {
  //     return knex('migrations_lock').del();
  //   })
  //   .then(function () {
  //     return knex('review').del();
  //   })
  //   .then(function () {
  //     return knex('school_contact_info').del();
  //   })
  //   .then(function () {
  //     return knex('school_details').del();
  //   })
  //   .then(function () {
  //     return knex('school_event').del();
  //   })
  //   .then(function () {
  //     return knex('school_photo').del();
  //   })
  //   .then(function () {
  //     return knex('school_users').del();
  //   })
  //   .then(function () {
  //     return knex('school_video').del();
  //   })
  //   .then(function () {
  //     return knex('social_card').del();
  //   })
  //   .then(function () {
  //     return knex('social_card_photo').del();
  //   })
  //   .then(function () {
  //     return knex('social_card_video').del();
  //   })
  //   .then(function () {
  //     return knex('user_follow_school').del();
  //   })
  //   .then(function () {
  //     return knex('users').del();
  //   })


  // .then(function () {

  // Inserts seed entries
  return knex('school_users').insert([
    { id: 1, username: 'hapSchool', password: 'password123' },
    { id: 2, username: 'marketing', password: '321' },
    { id: 3, username: 'hfc', password: '321' },
    { id: 4, username: 'vsa', password: '321' },
    { id: 5, username: 'Malvern', password: '321' },
    { id: 10, username: 'qwe@gmail.co', password: '$2b$10$Q64VLzXLYiF1AYU7UgDIPOIDn5SmUZ05Gg2waIfL6JxQis4grWGs.' },

    { id: 10, username: 'qwe@gmail.co', password: '$2b$10$vJNSQ8XEGM2yP33yzHAMmuRejcOkHLLHfO6Ned96tFRlioGFTjLFm' },


  //   { username: 'hapSchool', password: 'password123' },
  // { username: 'marketing', password: '321' },
  // { username: 'hfc', password: '321' },
  // { username: 'vsa', password: '321' },
  // { username: 'Malvern', password: '321' },
  ])
    // })
    // .then(function () {
    //   return knex('users').insert([
    //     { email: 'a@b.com', password: '123', first_name: 'Oli', last_name: 'Wong' }
    //   ])
    // })

    //USERS DATA
    .then(function () {
      return knex('users').insert([
        {
          id: 1,
          email: 'john@example.com',
          first_name: 'John',
          last_name: 'Doe',
          password: 'password123',
          profile_pic: 'profile.jpg',
          facebook_id: '123456789',
          access_token: 'abcxyz123',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 2,
          email: 'jane@example.com',
          first_name: 'Jane',
          last_name: 'Smith',
          password: 'password456',
          profile_pic: 'profile.jpg',
          facebook_id: '987654321',
          access_token: 'xyzabc456',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 35,
          email: 'abc@gmail.co',
          first_name: '',
          last_name: '',
          password: '$2b$10$vJNSQ8XEGM2yP33yzHAMmuRejcOkHLLHfO6Ned96tFRlioGFTjLFm',
          profile_pic: 'profile.jpg',
          facebook_id: '',
          access_token: '',
          created_at: new Date(),
          updated_at: new Date()
        },
        // Add more user data objects as needed
      ]);
    })

    // SCHOOL DETAILS
    .then(function () {
      return knex('school_details').insert([
        { school_id: 1, school_name: 'Happy Kindergarten', location: 'Wong Tai Sin', am_student: 50, pm_student: 60, half_day_tuition: 0, profile_pic: 'https://i0.wp.com/hongkongschools.com.hk/wp-content/uploads/listing-uploads/gallery/2022/04/ESF-International-Kindergarten-Hillside-1.jpg?fit=5472%2C3648&ssl=1', has_subsidy: true, subsidy_amt: 1800, has_am: true, has_pm: true, has_full_day: false, has_long_full_day: false, no_of_teacher: 40 },

        { school_id: 2, school_name: 'Everyday Kindergarten', location: 'Central', am_student: 48, pm_student: 46, full_day_student: 14, profile_pic: 'https://upload.wikimedia.org/wikipedia/commons/d/d7/HK_Peak_Guildford_Road_German_Swiss_Intl_Sch_L.JPG', half_day_tuition: 1700, full_day_tuition: 5400, has_subsidy: true, subsidy_amt: 1500, has_am: true, has_pm: true, has_full_day: true, has_long_full_day: false, no_of_teacher: 38 },

        { school_id: 3, school_name: 'Creative Kindergarten', location: 'Eastern', am_student: 48, pm_student: 46, full_day_student: 14, profile_pic: 'https://hf.creative.edu.hk/wp-content/uploads/sites/34/2022/01/00D7942C-FF5D-4377-AACA-DCDE11EB3E28.jpeg',  half_day_tuition: 1700, full_day_tuition: 5400, has_subsidy: true, subsidy_amt: 1500, has_am: true, has_pm: true, has_full_day: true, has_long_full_day: false, no_of_teacher: 38 },

        { school_id: 4, school_name: 'Causeway Bay Victoria Kindergarten and International Nursery', location: 'Wan Chai', am_student: 48, pm_student: 46, full_day_student: 14, half_day_tuition: 1700, full_day_tuition: 5400, has_subsidy: true, profile_pic: 'https://media.timeout.com/images/105663276/750/422/image.jpg', subsidy_amt: 1500, has_am: true, has_pm: true, has_full_day: true, has_long_full_day: false, no_of_teacher: 38 },

        { school_id: 5, school_name: 'Malvern College Pre-School Hong Kong', location: 'Central and Western', am_student: 48, profile_pic: 'https://www.itseducation.asia/assets/images/article-images/3bdbf_9eb44_mvcps_(1).jpg', pm_student: 46, full_day_student: 14, half_day_tuition: 1700, full_day_tuition: 5400, has_subsidy: true, subsidy_amt: 1500, has_am: true, has_pm: true, has_full_day: true, has_long_full_day: false, no_of_teacher: 38 },

        // {
        //   school_id: 3,
        //   school_name: 'Creative Kindergarten',
        //   location: 'Eastern',
        //   am_student: null,
        //   pm_student: null,
        //   full_day_student: null,
        //   long_full_day_student: null,
        //   full_day_tuition: null,
        //   long_full_day_tuition: null,
        //   has_subsidy: true,
        //   subsidy_amt: 0,
        //   has_am: true,
        //   has_pm: true,
        //   has_full_day: false,
        //   has_long_full_day: false,
        //   no_of_teacher: null
        // },

        // {
        //   school_id: 4,
        //   school_name: 'Causeway Bay Victoria Kindergarten and International Nursery',
        //   location: 'Wan Chai',
        //   am_student: null,
        //   pm_student: null,
        //   full_day_student: null,
        //   half_day_tuition: null,
        //   full_day_tuition: null,
        //   has_subsidy: null,
        //   subsidy_amt: null,
        //   has_am: true,
        //   has_pm: true,
        //   has_full_day: true,
        //   has_long_full_day: false,
        //   no_of_teacher: null
        // },

        // {
        //   school_id: 5,
        //   school_name: 'Malvern College Pre-School Hong Kong',
        //   location: 'Island West',
        //   am_student: null,
        //   pm_student: null,
        //   full_day_student: null,
        //   half_day_tuition: null,
        //   full_day_tuition: null,
        //   has_subsidy: null,
        //   subsidy_amt: null,
        //   has_am: true,
        //   has_pm: false,
        //   has_full_day: true,
        //   has_long_full_day: false,
        //   no_of_teacher: null
        // }


      ])
      // }
    })

    // REVIEW
    .then(function () {
      return knex('review').insert([
        {
          user_id: 1,
          school_id: 1,
          comment_content: 'This is a great school!',
          score_param_1: 5,
          score_param_2: 4,
          score_param_3: 5,
          teaching_style: 'Interactive and engaging',
          is_reported: false,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          user_id: 2,
          school_id: 2,
          comment_content: 'I had a wonderful experience here.',
          score_param_1: 4,
          score_param_2: 5,
          score_param_3: 4,
          teaching_style: 'Structured and organized',
          is_reported: false,
          created_at: new Date(),
          updated_at: new Date()
        },
        // Add more review data objects as needed
      ]);
    })

    // SCHOOL VIDEO
    .then(function () {
      return knex('school_video').insert([
        {
          school_id: 1,
          video: 'video1.mp4',
          is_posted: true,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          school_id: 1,
          video: 'video2.mp4',
          is_posted: true,
          created_at: new Date(),
          updated_at: new Date()
        },
      ]);
    })
    // .then(function(){
    //   return knex('school_contact_info').insert([
    //     {school_id:1, address: '12 Rich Road',  email: 'admin@school.com'},
    //     {school_id:2, address: '123 Happy Road', email: 'admin@yy.com' }
    //   ])
    // })
    //     .then(function () {
    //       return knex('school_event').insert([
    //         { school_id: 1, event_date: '2019-03-03', event_name: 'Open day', event_description: 'school tour and demo class', event_venue: 'Happy Kindergarten', is_free: true }
    //       ])
    //     })

    // SCHOOL PHOTO
    .then(function () {
      return knex('school_photo').insert([
        {
          school_id: 1,
          photo: 'photo1.jpg',
          created_at: new Date(),
          updated_at: new Date(),
          photo_category: 'Outdoor Activities',
          caption: 'Children playing in the garden'
        },
        {
          school_id: 1,
          photo: 'photo2.jpg',
          created_at: new Date(),
          updated_at: new Date(),
          photo_category: 'Classrooms',
          caption: 'A classroom setup with interactive learning materials'
        },
      ]);
    })

    .then(function () {
      return knex('school_event').insert([
        {
          id: 1,
          school_id: 1,
          poster: 'poster_url',
          event_name: 'Event Name',
          event_venue: 'Event Venue',
          event_description: 'Event Description',
          is_free: true,
          event_date: '2024-01-17',
          start_time: '09:00:00',
          end_time: '12:00:00',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 2,
          school_id: 1,
          poster: 'poster_url_2',
          event_name: 'Second Event',
          event_venue: 'Event Venue 2',
          event_description: 'Event Description 2',
          is_free: false,
          event_date: '2024-02-01',
          start_time: '18:30:00',
          end_time: '21:00:00',
          created_at: new Date(),
          updated_at: new Date()
        }
      ]);
    })

    .then(function () {
      return knex('social_card').insert([
        {
          id: 1,
          school_id: 1,
          card_content: 'Card content 1',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 2,
          school_id: 1,
          card_content: 'Card content 2',
          created_at: new Date(),
          updated_at: new Date()
        }
      ]);
    })

    .then(function () {
      return knex('user_follow_school').insert([
        {
          school_id: 1,
          user_id: 1,
          notification_off: false,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          school_id: 1,
          user_id: 2,
          notification_off: true,
          created_at: new Date(),
          updated_at: new Date()
        }
      ]);
    })

    .then(function () {
      return knex('event_signup').insert([
        {
          event_id: 1,
          user_id: 1,
          is_interested: true,
          is_attending: false,
          user_email: 'user1@example.com',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          event_id: 1,
          user_id: 2,
          is_interested: true,
          is_attending: true,
          user_email: 'user2@example.com',
          created_at: new Date(),
          updated_at: new Date()
        }
      ]);
    })
    .then(function () {
      return knex('admin').insert([
        {
          username: 'admin1',
          password: 'admin1password'
        },
        {
          username: 'admin2',
          password: 'admin2password'
        }
      ]);
    })

    .then(function () {
      return knex('social_card_photo').insert([
        {
          card_id: 1,
          photo: 'photo_url_1',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          card_id: 2,
          photo: 'photo_url_2',
          created_at: new Date(),
          updated_at: new Date()
        }
      ]);
    })

    .then(function () {
      return knex('social_card_video').insert([
        {
          card_id: 1,
          video: 'video_url_1',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          card_id: 2,
          video: 'video_url_2',
          created_at: new Date(),
          updated_at: new Date()
        }
      ]);
    })

    .then(function () {
      return knex('school_contact_info').insert([
        {
          school_id: 1,
          website: 'https://www.example.com',
          address: '123 Main Street',
          email: 'info@example.com',
          created_at: new Date(),
          updated_at: new Date(),
          contact_number: '123456789',
          school_name: 'Happy Kindergarten'
        }
      ]);
    })

}


