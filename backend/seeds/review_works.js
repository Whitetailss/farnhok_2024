// // .then(function () {
// // Inserts seed entries
// return knex('school_users').insert([
//     { id: 1, username: 'hapSchool', password: '123' },
//     { id: 2, username: 'marketing', password: '321' },
//   ]);
//   // })
//   // .then(function () {
//   //   return knex('users').insert([
//   //     { email: 'a@b.com', password: '123', first_name: 'Oli', last_name: 'Wong' }
//   //   ])
//   // })
  
//   // USERS DATA
//   .then(function () {
//     return knex('users').insert([
//       {
//         id: 11,
//         email: 'john@example.com',
//         first_name: 'John',
//         last_name: 'Doe',
//         password: 'password123',
//         profile_pic: 'profile.jpg',
//         facebook_id: '123456789',
//         access_token: 'abcxyz123',
//         created_at: new Date(),
//         updated_at: new Date(),
//       },
//       {
//         id: 12,
//         email: 'jane@example.com',
//         first_name: 'Jane',
//         last_name: 'Smith',
//         password: 'password456',
//         profile_pic: 'profile.jpg',
//         facebook_id: '987654321',
//         access_token: 'xyzabc456',
//         created_at: new Date(),
//         updated_at: new Date(),
//       },
//       // Add more user data objects as needed
//     ]);
//   })
  
//   // SCHOOL DETAILS
//   .then(function () {
//     return knex('school_details').insert([
//       {
//         school_id: 1,
//         school_name: 'Happy Kindergarten',
//         location: 'Wong Tai Sin',
//         am_student: 50,
//         pm_student: 60,
//         half_day_tuition: 0,
//         has_subsidy: true,
//         subsidy_amt: 1800,
//         has_am: true,
//         has_pm: true,
//         has_full_day: false,
//         has_long_full_day: false,
//         no_of_teacher: 40,
//       },
  
//       {
//         school_id: 2,
//         school_name: 'Everyday Kindergarten',
//         location: 'Central',
//         am_student: 48,
//         pm_student: 46,
//         full_day_student: 14,
//         half_day_tuition: 1700,
//         full_day_tuition: 5400,
//         has_subsidy: true,
//         subsidy_amt: 1500,
//         has_am: true,
//         has_pm: true,
//         has_full_day: true,
//         has_long_full_day: false,
//         no_of_teacher: 38,
//       },
//     ]);
//   })
  
//   // REVIEW
//   .then(function () {
//     return knex('review').insert([
//       {
//         user_id: 11,
//         school_id: 1,
//         comment_content: 'This is a great school!',
//         score_param_1: 5,
//         score_param_2: 4,
//         score_param_3: 5,
//         teaching_style: 'Interactive and engaging',
//         is_reported: false,
//         created_at: new Date(),
//         updated_at: new Date(),
//       },
//       {
//         user_id: 12,
//         school_id: 2,
//         comment_content: 'I had a wonderful experience here.',
//         score_param_1: 4,
//         score_param_2: 5,
//         score_param_3: 4,
//         teaching_style: 'Structured and organized',
//         is_reported: false,
//         created_at: new Date(),
//         updated_at: new Date(),
//       },
//       // Add more review data objects as needed
//     ]);
//   })
  
//   // SCHOOL VIDEO
//   .then(function () {
//     return knex('school_video').insert([
//       {
//         school_id: 1,
//         video: 'video1.mp4',
//         is_posted: true,
//         created_at: new Date(),
//         updated_at: new Date(),
//       },
//       {
//         school_id: 1,
//         video: 'video2.mp4',
//         is_posted: true,
//         created_at: new Date(),
//         updated_at: new Date(),
//       },
//     ]);
//   });
//   // .then(function(){
//   //   return knex('school_contact_info').insert([
//   //     {school_id:1, address: '12 Rich Road',  email: 'admin@school.com'},
//   //     {school_id:2, address: '123 Happy Road', email: 'admin@yy.com' }
//   //   ])
//   // })

// Enter fixed id for users table