import { createFileRoute, useParams, Navigate } from '@tanstack/react-router';
import ProgramLanding from '../components/ProgramLanding';
import { programsData } from '../data/programsData';

export const Route = createFileRoute('/program/$programId')({
    component: ProgramPage,
});

function ProgramPage() {
    const { programId } = useParams({ from: '/program/$programId' });

    // Get the program data based on the programId
    const programData = programsData[programId];

    // If program doesn't exist, redirect to programs page
    if (!programData) {
        return <Navigate to="/programs" />;
    }

    return <ProgramLanding programData={programData} />;
}
