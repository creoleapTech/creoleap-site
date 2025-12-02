import { createFileRoute } from '@tanstack/react-router';
import Industry40Landing from '../components/Industry40Landing';


export const Route = createFileRoute('/industry40')({
    component: Industry40Page,
});

function Industry40Page() {
    return <Industry40Landing />;
}
