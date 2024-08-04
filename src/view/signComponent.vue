<template>
    <div class="form-container">
        <form class="signup-form">
            <h1>회원가입</h1>
            <label for="email">아이디</label>
            <input type="email" id="email" name="email" placeholder="이메일을 입력하세요">
            
            <label for="password">비밀번호</label>
            <input type="password" id="password" name="password" placeholder="비밀번호를 입력하세요">
            
            <label for="name">이름</label>
            <input type="text" id="name" name="name" placeholder="이름을 입력하세요">
            
            <button type="submit">회원가입</button>
        </form>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.form-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
    background-color: #f9f9f9;
    margin: 0;
}

.signup-form {
    background-color: #fff;
    padding: 20px 30px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 100%;
    max-width: 700px;
}

.signup-form h1 {
    font-size: 24px;
    text-align: center;
    margin-bottom: 10px;
    color: #333;
}

.signup-form label {
    font-size: 14px;
    color: #333;
}

.signup-form input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 14px;
    width: 97%;
    margin-bottom: 10px;
}

.signup-form button {
    padding: 12px;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: white;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.signup-form button:hover {
    background-color: #0056b3;
}
</style>
