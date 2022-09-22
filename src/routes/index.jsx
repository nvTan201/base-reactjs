import Home from '../pages/Home';
import ProfileLayout from '../components/Layout/ProfileLayout';

const publicRoutes = [
    // !layout => mặc định
    // layout: null => không có layout
    { path: '/', component: Home },
];

const privateRoutes = {};

export { publicRoutes, privateRoutes };
