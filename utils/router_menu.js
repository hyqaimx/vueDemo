import home from 'src/home/home.vue';
import form from 'src/form/form.vue';
import table from 'src/table/table.vue';
import calendar from 'src/calendar/calendar.vue';
const routerMenu = [
    { path: 'home', key: 'home', menuName: '首页', component: home, page: true },
    {
        menuName: '工作台',
        key: 'workspace',
        page: false,
        children: [
            { path: 'form', key: 'form', menuName: '表单', component: form, page: true },
            { path: 'table', key: 'table', menuName: '表格', component: table, page: true },
            { path: 'calendar', key: 'calendar', menuName: '日历', component: calendar, page: true },
        ]
    }

]

export default routerMenu;