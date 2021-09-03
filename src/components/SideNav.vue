<template>
     <!-- partial:partials/_sidebar.html -->
    <nav class="sidebar sidebar-offcanvas" id="sidebar">
      <ul class="nav">
        <li class="nav-item">
          <a class="nav-link" href="index.html">
            <i class="icon-grid menu-icon"></i>
            <span class="menu-title">Dashboard</span>
          </a>
        </li>
        
        <li class="nav-item">
          <a class="nav-link" href="pages/apps/todo.html">
            <i class="icon-head menu-icon"></i>
            <span class="menu-title">Tenants</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="pages/apps/gallery.html">
            <i class="icon-image menu-icon"></i>
            <span class="menu-title">Agents</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="pages/documentation/documentation.html">
            <i class="icon-paper menu-icon"></i>
            <span class="menu-title">Properties</span>
          </a>
        </li>
      </ul>
    </nav>
</template>

<script>
export default {
    name: 'SideNav'
}
</script>

<style lang="scss" scoped>

</style>