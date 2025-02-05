import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Button, Container, Typography, Box } from "@mui/material";

export default function Index() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Sample
                </h2>
            }
        >
            <Head title="Sample" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">Sample</div>
                        <div className="p-6 text-gray-900">
                            <Container maxWidth="sm">
                                <Head title="Home" />
                                <Typography
                                    variant="h4"
                                    component="h1"
                                    gutterBottom
                                >
                                    MUI with Inertia + React
                                </Typography>
                                <Button variant="contained" color="primary">
                                    Button
                                </Button>
                            </Container>
                        </div>
                        <div className="p-6 text-gray-900">
                            <Box display="flex" flexDirection="row" gap={2}>
                                <div>flexRowItem1</div>
                                <div>flexRowItem2</div>
                                <div>flexRowItem3</div>
                            </Box>
                        </div>
                        <div className="p-6 text-gray-900">
                            <Box display="flex" flexDirection="column" gap={2}>
                                <div>flexColumnItem1</div>
                                <div>flexColumnItem2</div>
                                <div>flexColumnItem3</div>
                            </Box>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
