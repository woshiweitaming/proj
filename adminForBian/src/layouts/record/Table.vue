<template>
    <div class="table_class">
        <RechargeRecordTable v-if="$route.path === '/recharge/recharge_record'" />
        <WithdrawRecordTable v-if="$route.path === '/withdraw/withdraw_record'" />
        <AdminListRecordTable v-if="$route.path === '/admin/admin_list'" />
        <PaylogRecordTable v-if="$route.path === '/admin/paylog_record'" />
        <NoticeRecordTable v-if="$route.path === '/admin/notice/notice_list'" />
        <ProductRecordTable v-if="$route.path === '/product/product_list'" />
        <MemberListRecordTable v-if="$route.path === '/member/member_list'" />
        <AuditingListRecordTable v-if="$route.path === '/member/auditing'" />
        <PositionRecordTable v-if="$route.path === '/order/position_order_list'" />
        <HistoryRecordTable v-if="$route.path === '/order/history_order_list'" />
        <ForecastListTable v-if="$route.path.indexOf('/forecast/forecast_list') > -1" />
    </div>
</template>
<script>
import RechargeRecordTable from '@/layouts/recharge_record/Table'
import WithdrawRecordTable from '@/layouts/withdraw_record/Table'
import AdminListRecordTable from '@/layouts/admin/admin_list/Table'
import PaylogRecordTable from '@/layouts/admin/pay_log/Table'
import NoticeRecordTable from '@/layouts/admin/notice_list/Table'
import ProductRecordTable from '@/layouts/product_list/Table'
import MemberListRecordTable from '@/layouts/member/memberList/Table'
import AuditingListRecordTable from '@/layouts/member/auditingList/Table'
import PositionRecordTable from '@/layouts/order/position/Table'
import HistoryRecordTable from '@/layouts/order/history/Table'
import ForecastListTable from '@/layouts/forecast/Table'
export default {
    name: 'Table',
    components: {
        RechargeRecordTable,
        WithdrawRecordTable,
        AdminListRecordTable,
        PaylogRecordTable,
        NoticeRecordTable,
        ProductRecordTable,
        MemberListRecordTable,
        AuditingListRecordTable,
        PositionRecordTable,
        HistoryRecordTable,
        ForecastListTable
    },
}
</script>
<style lang="stylus" scoped>
.table_class
   flex 1
</style>