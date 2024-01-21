"use strict"
const SQL = require('../SQL/SQLquery')

const postSchoolSearch = async function (req, res, next) {

    console.log('postSchoolSearch req', req)

    // console.log('locationadsfdasfsaff', req.body.selectedLocation)

    var location = req.body.selectedLocation.toString()

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



    console.log('vasdvdsreq.body', req.body)
    console.log('beforeschoolDetail loop', schoolDetail);




    for (let i = 0; i < schoolDetail.length; i++) {
        let countFollow = await SQL.sqlQueryWithArray(schoolFollow, [schoolDetail[i].school_id])
        schoolDetail[i].follower = countFollow.length

        let countScore = await SQL.sqlQueryWithArray(schoolScore, [schoolDetail[i].school_id])
        if (countScore.length !== 0) {
            var totalScore = 0;
            for (let j = 0; j < countScore.length; j++) {
                totalScore += countScore[j].score_param_1
            }
            totalScore /= countScore.length
            schoolDetail[i].score = totalScore
        } else {
            schoolDetail[i].score = '-'
        }
    }
    console.log('afterschoolDetail loop', schoolDetail);
    // console.log('detailsArray2345678', detailsArray)
    res.send( schoolDetail)

    // res.send('req', req)
}



module.exports.postSchoolSearch = postSchoolSearch;