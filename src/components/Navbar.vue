<template>
    <nav id="nav">
        <div class="menu-item"><router-link to="/">Lensfinder</router-link></div>
        <div class="menu-item"><router-link to="/achieve">成果</router-link></div>
        <div class="menu-item"><router-link to="/lensfind">寻找</router-link></div>
        <div class="menu-item"><router-link to="/tutorial">教程</router-link></div>
        <div class="menu-item"><router-link to="/userctr">个人中心</router-link></div>
    </nav>
</template>
<style>

#nav {
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

#nav .menu-item {
  padding: 25px 40px;
  position: relative;
  text-align: center;
  border-bottom: 5px solid transparent;
  display: flex;
  transition: 0.4s;
}

#nav .menu-item a {
  font-weight: bold;
  color: #2c3e50;
}
#nav .menu-item a:hover{
  color: #42b983;
}
#nav .menu-item a.router-link-exact-active {
  color: #42b983;
}

</style>