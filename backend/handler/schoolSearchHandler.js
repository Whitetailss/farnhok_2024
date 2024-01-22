"use strict"
const SQL = require('../SQL/SQLquery')

const postSchoolSearch = async function (req, res, next) {

    console.log('postSchoolSearch req', req)

    // console.log('locationadsfdasfsaff', req.body.selectedLocation)

    let location = req.body.selectedLocation.toString()

    let schoolDetails = `
    SELECT * FROM school_details
    WHERE location IN ($2)
    OR
    school_name = $1
    OR
    has_am = $3
    OR
    has_pm = $4
    OR
    has_full_day = $5
    OR
    has_long_full_day = $6
    `

    let schoolFollow = `
    SELECT user_id FROM user_follow_school
    WHERE school_id = $1`

    let schoolScore = `
    SELECT score_param_1 FROM review
    WHERE school_id = $1`

    let detailsArray = [
        req.body.schoolName || '',
        location || '',
        // req.body.location || '',
        req.body.day1 || false,
        req.body.day2 || false,
        req.body.day3 || false,
        req.body.day4 || false
    ]

    let schoolDetail = await SQL.sqlQueryWithArray(schoolDetails, detailsArray);

    let string = 'Islands,Kwun Tong,Kowloon city,North'
    let locationArray = ['Islands', 'Kwun Tong', 'Kowloon', 'North']

    console.log('vasdvdsreq.body', req.body)
    // console.log('beforeschoolDetail loop', schoolDetail);

    let searchAll = {
        schoolName: '',
        selectedLocation: [],
        day1: false,
        day2: false,
        day3: false,
        day4: false
      }

    let filterSchoolDetail;

    // console.log('reqvwevew.body === searchAll', Object.is(req.body, {
    //     schoolName: '',
    //     selectedLocation: [],
    //     day1: false,
    //     day2: false,
    //     day3: false,
    //     day4: false
    //   }))

    console.log('req.body', req.body)
    console.log('searchAll', searchAll)
    // console.log('locationsdfghjkl', req.body.selectedLocation)
    if (Array.isArray(req.body.selectedLocation) && req.body.selectedLocation.length === 0) {
        filterSchoolDetail = schoolDetail;
    } else {
        filterSchoolDetail = schoolDetail.filter((schoolD) => req.body.selectedLocation.includes(schoolD.location))
    }

    console.log('beforeschoolDetail loop', filterSchoolDetail);

    // PREVIOUSLY
    // for (let i = 0; i < schoolDetail.length; i++) {
    for (let i = 0; i < filterSchoolDetail.length; i++) {
        let countFollow = await SQL.sqlQueryWithArray(schoolFollow, [filterSchoolDetail[i].school_id])
        filterSchoolDetail[i].follower = countFollow.length

        let countScore = await SQL.sqlQueryWithArray(schoolScore, [filterSchoolDetail[i].school_id])
        if (countScore.length !== 0) {
            var totalScore = 0;
            for (let j = 0; j < countScore.length; j++) {
                totalScore += countScore[j].score_param_1
            }
            totalScore /= countScore.length
            filterSchoolDetail[i].score = totalScore
        } else {
            filterSchoolDetail[i].score = '-'
        }
    }
    console.log('afterfilterSchoolDetail loop', filterSchoolDetail);
    // console.log('detailsArray2345678', detailsArray)
    res.send(filterSchoolDetail)

    // res.send('req', req)
}



module.exports.postSchoolSearch = postSchoolSearch;