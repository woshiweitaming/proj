import { formatDate } from '@/utils/utils'

const date = new Date()
//带时分秒
const currStartDate = new Date(formatDate(date) + ' 00:00:00').getTime()
const currEndDate = new Date(formatDate(date) + ' 23:59:59').getTime()

//开始时间
export const startDate = {
    name: '开始时间',
    key: 'start_time',
    type: 'start_date',
    value: currStartDate
}
//结束时间
export const endDate = {
    name: '结束时间',
    key: 'end_time',
    type: 'end_date',
    value: currEndDate
}
//开始时间带时分秒
export const startDateHMS = {
    name: '开始时间',
    key: 'start_time',
    type: 'start_date_hms',
    value: currStartDate * 1000
}
//结束时间带时分秒
export const endDateHMS = {
    name: '结束时间',
    key: 'end_time',
    type: 'end_date_hms',
    value: currEndDate * 1000
}