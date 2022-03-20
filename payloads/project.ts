export interface IProject {
    title: string;
    startAt: string;
    endAt: string;
    where: string;
    description: string[];
    skills: string[];
}

export const projects: IProject[] = [
    {
        title: 'Lissn',
        startAt: '2022.01',
        endAt: '',
        where: '',
        description: [
            '플레이리스트 공유 사이트',
            'YoutubeAPI를 이용한 음악 영상 검색',
        ],
        skills: [
            'Spring Boot',
            'Spring Data JPA',
            'Spring Security',
        ]
    },
    {
        title: '하프스 슬랙앱',
        startAt: '2021.09',
        endAt: '2021.12',
        where: '하프스',
        description: [
            '사내 슬랙앱 리팩토링',
            'Bitbucket, Jira, Figma OAuth2 연동',
            'ExpressJs -> NextJS 마이그레이션',
        ],
        skills: [
            'NodeJS',
            'NextJS',
            'BoltJS',
            'TypeORM',
            'TypeScript',
        ]
    },
    {
        title: 'Groopy',
        startAt: '2019-01-01',
        endAt: '2019-01-01',
        where: 'Where 3',
        description: [
            '동아리 관리 프로젝트',
            'JWT를 이용한 로그인, CRUD, 로깅 처리',
            'Jenkins CI/CD 구성 및 Slack 알림'
        ],
        skills: [
            'Spring Boot',
            'Spring Data JPA',
            'Spring Security',
            'Jenkins',
            'MySQL'
        ]
    },
]