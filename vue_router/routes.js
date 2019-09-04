import routerMenu from 'utils/router_menu';
import home from 'src/home/home.vue';

const routes = []

routerMenu.forEach(item => {
    if (item.page) {
        routes.push({ path: '/' + item.path, component: item.component });
    }
    if (item.children && !item.page) {
        item.children.forEach(citem => {
            if (citem.page) {
                routes.push({ path: '/' + citem.path, component: citem.component });
            }
        })
    }
})

routes.push({ path: '/', redirect: '/home' });

export default routes