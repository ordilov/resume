export interface IExperience {
    company: string;
    position: string;
    startAt: string;
    endAt: string;
    description: string[];
    skills: string[];
}

export const experiences: IExperience[] = [
    {
        company: '하프스',
        position: '백엔드 인턴',
        startAt: '2021.09',
        endAt: '2021.12',
        description: [
            '사내 연동 슬랙앱 설계 및 개발'
        ],
        skills: [
            'TypeScript',
            'NextJs',
            'BoltJs',
            'MySQL',
            'EC2',
            'RDS'
        ]
    },
    {
        company: '글루시스',
        position: '개발팀 인턴',
        startAt: '2021.01',
        endAt: '2020.03',
        description: [
            '사내 연동 슬랙앱 설계 및 개발'
        ],
        skills: [

        ]
    },
    {
        company: '전자부품연구원',
        position: 'VR/AR 개발팀 계약직',
        startAt: '2018.11',
        endAt: '2019.12',
        description: [
            '3D 프린터 시뮬레이터 개발'
        ],
        skills:[
            'Unity', 'C#', 'MySQL',
        ]
    }
]