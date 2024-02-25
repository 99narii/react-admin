export default {
    // 사용자 로그인 처리
    login: ({ username, password }) => {
        if (username === 'admin' && password === '1234') {
            localStorage.setItem('username', username);
            return Promise.resolve();
        }
        return Promise.reject('ID 및 비밀번호를 확인해주세요');
    },
    // 사용자 로그아웃 처리
    logout: () => {
        localStorage.removeItem('username');
        return Promise.resolve();
    },
    // 에러 발생 시 권한 체크
    checkError: (error) => {
        if (error.status === 401 || error.status === 403) {
            localStorage.removeItem('username');
            return Promise.reject();
        }
        return Promise.resolve();
    },
    // 페이지 접근 권한 체크
    checkAuth: () => {
        return localStorage.getItem('username') ? Promise.resolve() : Promise.reject();
    },
    // 권한 변경 시 페이지 이동 처리
    getPermissions: () => Promise.resolve(),
};
