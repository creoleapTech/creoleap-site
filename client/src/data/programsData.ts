export interface ProgramData {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    duration: string;
    badge: string;
    heroImage: string;
    highlights: {
        icon: string;
        title: string;
        description: string;
    }[];
    streams?: {
        id: string;
        title: string;
        description: string;
        icon: string;
        color: string;
        gradient: string;
        topics: string[];
    }[];
    projects: {
        icon: string;
        title: string;
        description: string;
        stream: string;
    }[];
    stats: {
        icon: string;
        value: string;
        label: string;
    }[];
    certifications: {
        title: string;
        description: string;
    }[];
}

export const programsData: Record<string, ProgramData> = {
    'industry-4.0': {
        id: 'industry-4.0',
        title: 'Industry 4.0 Readiness Program',
        subtitle: 'Master Industry 4.0 in Just 6 Months',
        description: 'A comprehensive hands-on course covering Embedded Systems, IoT, Generative AI, and Robotics. Earn dual certifications and build real-world projects.',
        duration: '6 Months',
        badge: 'Industry 4.0 Readiness Program',
        heroImage: '/images/illus1.png',
        stats: [
            { icon: 'mdi:account-group', value: '500+', label: 'Students Trained' },
            { icon: 'mdi:certificate', value: 'Dual', label: 'Certifications' },
            { icon: 'mdi:laptop', value: '100%', label: 'Hands-On Projects' },
            { icon: 'mdi:clock-time-four', value: '6 Months', label: 'Duration' },
        ],
        certifications: [
            { title: 'Course Completion Certificate', description: 'Recognized industry certification' },
            { title: 'Internship Certificate', description: 'Practical experience validation' },
        ],
        highlights: [
            {
                icon: 'mdi:certificate-outline',
                title: 'Dual Certification',
                description: 'Receive both Course Completion Certificate and Internship Certificate upon successful completion.',
            },
            {
                icon: 'mdi:laptop',
                title: '100% Hands-On Projects',
                description: 'Build real-world projects in all four streams with industry-standard tools and technologies.',
            },
            {
                icon: 'mdi:account-tie',
                title: 'Expert Mentorship',
                description: 'Learn from industry professionals with years of experience in Industry 4.0 technologies.',
            },
            {
                icon: 'mdi:briefcase-check',
                title: 'Internship Included',
                description: 'Gain practical industry experience through our integrated internship program.',
            },
            {
                icon: 'mdi:clock-fast',
                title: 'Flexible Schedule',
                description: 'Weekend and weekday batches available to fit your schedule.',
            },
            {
                icon: 'mdi:network',
                title: 'Industry Network',
                description: 'Connect with professionals and peers in the Industry 4.0 ecosystem.',
            },
        ],
        streams: [
            {
                id: 'embedded',
                title: 'Embedded Systems',
                description: 'Master microcontroller programming, RTOS, and embedded hardware design for Industry 4.0 applications.',
                icon: 'mdi:chip',
                color: 'from-blue-600 to-indigo-600',
                gradient: 'bg-gradient-to-br from-blue-50 to-indigo-50',
                topics: ['ARM Cortex Programming', 'RTOS Development', 'Embedded C/C++', 'Hardware Interfacing'],
            },
            {
                id: 'iot',
                title: 'Internet of Things',
                description: 'Build connected ecosystems with IoT sensors, cloud platforms, and real-time data analytics.',
                icon: 'mdi:access-point-network',
                color: 'from-green-600 to-teal-600',
                gradient: 'bg-gradient-to-br from-green-50 to-teal-50',
                topics: ['IoT Protocols', 'Cloud Integration', 'Sensor Networks', 'Edge Computing'],
            },
            {
                id: 'ai',
                title: 'Generative AI',
                description: 'Explore cutting-edge AI technologies, machine learning models, and neural networks for automation.',
                icon: 'mdi:brain',
                color: 'from-purple-600 to-pink-600',
                gradient: 'bg-gradient-to-br from-purple-50 to-pink-50',
                topics: ['Machine Learning', 'Deep Learning', 'LLM Integration', 'AI Model Training'],
            },
            {
                id: 'robotics',
                title: 'Robotics & Automation',
                description: 'Learn advanced robotics, industrial automation, and collaborative robot programming.',
                icon: 'mdi:robot-industrial',
                color: 'from-orange-600 to-red-600',
                gradient: 'bg-gradient-to-br from-orange-50 to-red-50',
                topics: ['Robot Kinematics', 'Path Planning', 'ROS Framework', 'Industrial Automation'],
            },
        ],
        projects: [
            {
                icon: 'mdi:chip',
                title: 'Smart Embedded Device',
                description: 'Design and program a microcontroller-based system with real-time capabilities.',
                stream: 'Embedded Systems',
            },
            {
                icon: 'mdi:access-point-network',
                title: 'IoT Monitoring System',
                description: 'Build an end-to-end IoT solution with sensors, cloud integration, and analytics.',
                stream: 'Internet of Things',
            },
            {
                icon: 'mdi:brain',
                title: 'AI-Powered Application',
                description: 'Develop an intelligent system using machine learning and generative AI models.',
                stream: 'Generative AI',
            },
            {
                icon: 'mdi:robot-industrial',
                title: 'Autonomous Robot',
                description: 'Program and control a robot for industrial automation tasks.',
                stream: 'Robotics & Automation',
            },
        ],
    },
    'ros2': {
        id: 'ros2',
        title: 'ROS2 Certification',
        subtitle: 'Master Robot Operating System 2',
        description: 'Comprehensive ROS2 training program covering advanced robotics concepts, real-time systems, and autonomous navigation.',
        duration: '3 Months',
        badge: 'ROS2 Certification',
        heroImage: '/images/illus1.png',
        stats: [
            { icon: 'mdi:account-group', value: '200+', label: 'Students Certified' },
            { icon: 'mdi:certificate', value: 'Industry', label: 'Recognized' },
            { icon: 'mdi:robot', value: '15+', label: 'Robot Projects' },
            { icon: 'mdi:clock-time-four', value: '3 Months', label: 'Duration' },
        ],
        certifications: [
            { title: 'ROS2 Professional Certificate', description: 'Industry-recognized ROS2 certification' },
        ],
        highlights: [
            {
                icon: 'mdi:robot',
                title: 'ROS2 Fundamentals',
                description: 'Master the core concepts of ROS2 including nodes, topics, services, and actions.',
            },
            {
                icon: 'mdi:code-braces',
                title: 'Hands-On Programming',
                description: 'Write ROS2 code in Python and C++ for real robot applications.',
            },
            {
                icon: 'mdi:navigation',
                title: 'Navigation Stack',
                description: 'Implement autonomous navigation using Nav2 and SLAM algorithms.',
            },
            {
                icon: 'mdi:eye',
                title: 'Computer Vision',
                description: 'Integrate cameras and vision processing with ROS2.',
            },
            {
                icon: 'mdi:network',
                title: 'Multi-Robot Systems',
                description: 'Learn to coordinate multiple robots using ROS2.',
            },
            {
                icon: 'mdi:certificate',
                title: 'Industry Certification',
                description: 'Earn a recognized ROS2 professional certification.',
            },
        ],
        projects: [
            {
                icon: 'mdi:robot-vacuum',
                title: 'Autonomous Mobile Robot',
                description: 'Build a self-navigating robot using ROS2 navigation stack.',
                stream: 'ROS2',
            },
            {
                icon: 'mdi:robot-industrial',
                title: 'Robotic Arm Control',
                description: 'Program a robotic manipulator using MoveIt2 and ROS2.',
                stream: 'ROS2',
            },
            {
                icon: 'mdi:camera',
                title: 'Vision-Based Navigation',
                description: 'Implement object detection and tracking with ROS2.',
                stream: 'ROS2',
            },
            {
                icon: 'mdi:map-marker-path',
                title: 'SLAM Implementation',
                description: 'Create maps and localize robots in unknown environments.',
                stream: 'ROS2',
            },
        ],
    },
    'embedded-iot': {
        id: 'embedded-iot',
        title: 'Embedded System & IoT Certification',
        subtitle: 'Master Embedded Systems and IoT',
        description: 'Deep dive into embedded systems programming, IoT protocols, and connected device development with industry-standard tools.',
        duration: '4 Months',
        badge: 'Embedded System & IoT Certification',
        heroImage: '/images/illus1.png',
        stats: [
            { icon: 'mdi:account-group', value: '300+', label: 'Students Trained' },
            { icon: 'mdi:certificate', value: 'Dual', label: 'Certifications' },
            { icon: 'mdi:chip', value: '20+', label: 'IoT Projects' },
            { icon: 'mdi:clock-time-four', value: '4 Months', label: 'Duration' },
        ],
        certifications: [
            { title: 'Embedded Systems Certificate', description: 'Professional embedded systems certification' },
            { title: 'IoT Developer Certificate', description: 'Industry-recognized IoT certification' },
        ],
        highlights: [
            {
                icon: 'mdi:chip',
                title: 'Microcontroller Programming',
                description: 'Master ARM Cortex, ESP32, and other popular microcontrollers.',
            },
            {
                icon: 'mdi:access-point-network',
                title: 'IoT Protocols',
                description: 'Learn MQTT, CoAP, HTTP, and other IoT communication protocols.',
            },
            {
                icon: 'mdi:cloud',
                title: 'Cloud Integration',
                description: 'Connect devices to AWS IoT, Azure IoT Hub, and Google Cloud IoT.',
            },
            {
                icon: 'mdi:security',
                title: 'IoT Security',
                description: 'Implement secure communication and device authentication.',
            },
            {
                icon: 'mdi:chart-line',
                title: 'Data Analytics',
                description: 'Process and visualize sensor data in real-time.',
            },
            {
                icon: 'mdi:cog',
                title: 'RTOS Development',
                description: 'Build real-time embedded applications with FreeRTOS.',
            },
        ],
        projects: [
            {
                icon: 'mdi:home-automation',
                title: 'Smart Home System',
                description: 'Build a complete IoT-based home automation solution.',
                stream: 'IoT',
            },
            {
                icon: 'mdi:factory',
                title: 'Industrial Monitoring',
                description: 'Create an industrial IoT monitoring and control system.',
                stream: 'Embedded & IoT',
            },
            {
                icon: 'mdi:weather-cloudy',
                title: 'Environmental Monitoring',
                description: 'Develop a multi-sensor environmental monitoring station.',
                stream: 'IoT',
            },
            {
                icon: 'mdi:car',
                title: 'Vehicle Tracking System',
                description: 'Build a GPS-based vehicle tracking and monitoring system.',
                stream: 'Embedded & IoT',
            },
        ],
    },
};
