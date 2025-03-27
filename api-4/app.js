const express = require('express');
const bodyParser = require('body-parser');
const discountRoute = require('./routes/discountRoute');

// 앱 인스턴스 생성
const app = express();
app.use(bodyParser.json());

// 할인 계산 API 경로 설정
app.use('/api/v1', discountRoute);

// 포트 설정
const PORT = process.env.PORT || 3000;

// 서버가 테스트 환경에서 실행되지 않도록 조건 추가
if (process.env.NODE_ENV !== 'test') {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

// 앱 인스턴스를 외부에서 사용할 수 있도록 export
module.exports = app;