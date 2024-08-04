<template>
    <div class="header">
        <div class="logo">
            <h1>Voca-Book</h1>
        </div>
        <ul class="nav">
            <li class="nav-item">Home</li>
            <li class="nav-item">Sign-out</li>
            <li class="nav-item">{{ '님' }}</li>
        </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.header {
    margin-left: 2.5%;
    width: 95%;
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f0f0f0;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.logo {
    display: flex;
    align-items: center;
}

.logo h1 {
    font-size: 2em;
    color: #333;
    margin: 0;
}

.nav {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 20px;
}

.nav-item {
    font-size: 1em;
    color: #007bff;
    cursor: pointer;
    transition: color 0.3s ease;
}

.nav-item:nth-child(3) {
    font-size: 1em;
    color: black !important;
    cursor: pointer;
    transition: color 0.3s ease;
}

.nav-item:hover {
    color: #0056b3;
}
</style>
