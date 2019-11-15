<template>
  <div>
    <nav class="navbar is-white is-hidden-desktop is-hidden-tablet">
      <div class="container">
        <div class="navbar-brand">
          <div class="navbar-burger burger" data-target="navMenu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div id="navMenu" class="navbar-menu" :class="{'is-active': showMobileMenu}">
          <div class="navbar-start">
            <a class="navbar-item" href="admin.html">Home</a>
            <a class="navbar-item" href="admin.html">Orders</a>
            <a class="navbar-item" href="admin.html">Payments</a>
            <a class="navbar-item" href="admin.html">Exceptions</a>
            <a class="navbar-item" href="admin.html">Reports</a>
          </div>
        </div>
      </div>
    </nav>
    <!-- END NAV -->
    <div class="container">
      <div class="columns">
        <div class="column is-hidden-mobile is-2">
          <aside class="menu">
            <p class="menu-label">General</p>
            <ul class="menu-list">
              <li>
                <a class="is-active">Dashboard</a>
              </li>
              <li>
                <a>Meine Geräte</a>
              </li>
              <li>
                <a>Support Anfragen</a>
              </li>
              <li>
                <a>Updates</a>
              </li>
              <li>
                <a>Zusätze</a>
              </li>
            </ul>
          </aside>
        </div>
        <div class="column is-10">
          <section class="hero is-info welcome is-small">
            <div class="hero-body">
              <div class="container">
                <h1 class="title">Hello, Admin.</h1>
                <h2 class="subtitle">I hope you are having a great day!</h2>
              </div>
            </div>
          </section>
          <section class="info-tiles">
            <div class="tile is-ancestor has-text-centered">
              <div class="tile is-parent">
                <article class="tile is-child box">
                  <p class="title">439k</p>
                  <p class="subtitle">Users</p>
                </article>
              </div>
              <div class="tile is-parent">
                <article class="tile is-child box">
                  <p class="title">59k</p>
                  <p class="subtitle">Products</p>
                </article>
              </div>
              <div class="tile is-parent">
                <article class="tile is-child box">
                  <p class="title">3.4k</p>
                  <p class="subtitle">Open Orders</p>
                </article>
              </div>
              <div class="tile is-parent">
                <article class="tile is-child box">
                  <p class="title">19</p>
                  <p class="subtitle">Exceptions</p>
                </article>
              </div>
            </div>
          </section>
          <div class="columns">
            <div class="column is-6">
              <div class="card events-card">
                <header class="card-header">
                  <p class="card-header-title">Events</p>
                  <a href="#" class="card-header-icon" aria-label="more options">
                    <span class="icon">
                      <i class="fa fa-angle-down" aria-hidden="true"></i>
                    </span>
                  </a>
                </header>
                <div class="card-table">
                  <div class="content">
                    <table class="table is-fullwidth is-striped">
                      <tbody>
                        <tr>
                          <td width="5%">
                            <i class="fa fa-bell-o"></i>
                          </td>
                          <td>Lorum ipsum dolem aire</td>
                          <td class="level-right">
                            <a class="button is-small is-primary" href="#">Action</a>
                          </td>
                        </tr>
                        <tr>
                          <td width="5%">
                            <i class="fa fa-bell-o"></i>
                          </td>
                          <td>Lorum ipsum dolem aire</td>
                          <td class="level-right">
                            <a class="button is-small is-primary" href="#">Action</a>
                          </td>
                        </tr>
                        <tr>
                          <td width="5%">
                            <i class="fa fa-bell-o"></i>
                          </td>
                          <td>Lorum ipsum dolem aire</td>
                          <td class="level-right">
                            <a class="button is-small is-primary" href="#">Action</a>
                          </td>
                        </tr>
                        <tr>
                          <td width="5%">
                            <i class="fa fa-bell-o"></i>
                          </td>
                          <td>Lorum ipsum dolem aire</td>
                          <td class="level-right">
                            <a class="button is-small is-primary" href="#">Action</a>
                          </td>
                        </tr>
                        <tr>
                          <td width="5%">
                            <i class="fa fa-bell-o"></i>
                          </td>
                          <td>Lorum ipsum dolem aire</td>
                          <td class="level-right">
                            <a class="button is-small is-primary" href="#">Action</a>
                          </td>
                        </tr>
                        <tr>
                          <td width="5%">
                            <i class="fa fa-bell-o"></i>
                          </td>
                          <td>Lorum ipsum dolem aire</td>
                          <td class="level-right">
                            <a class="button is-small is-primary" href="#">Action</a>
                          </td>
                        </tr>
                        <tr>
                          <td width="5%">
                            <i class="fa fa-bell-o"></i>
                          </td>
                          <td>Lorum ipsum dolem aire</td>
                          <td class="level-right">
                            <a class="button is-small is-primary" href="#">Action</a>
                          </td>
                        </tr>
                        <tr>
                          <td width="5%">
                            <i class="fa fa-bell-o"></i>
                          </td>
                          <td>Lorum ipsum dolem aire</td>
                          <td class="level-right">
                            <a class="button is-small is-primary" href="#">Action</a>
                          </td>
                        </tr>
                        <tr>
                          <td width="5%">
                            <i class="fa fa-bell-o"></i>
                          </td>
                          <td>Lorum ipsum dolem aire</td>
                          <td class="level-right">
                            <a class="button is-small is-primary" href="#">Action</a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <footer class="card-footer">
                  <a href="#" class="card-footer-item">View All</a>
                </footer>
              </div>
            </div>
            <div class="column is-6">
              <div class="card">
                <header class="card-header">
                  <p class="card-header-title">Inventory Search</p>
                  <a href="#" class="card-header-icon" aria-label="more options">
                    <span class="icon">
                      <i class="fa fa-angle-down" aria-hidden="true"></i>
                    </span>
                  </a>
                </header>
                <div class="card-content">
                  <div class="content">
                    <div class="control has-icons-left has-icons-right">
                      <input class="input is-large" type="text" placeholder />
                      <span class="icon is-medium is-left">
                        <i class="fa fa-search"></i>
                      </span>
                      <span class="icon is-medium is-right">
                        <i class="fa fa-check"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card">
                <header class="card-header">
                  <p class="card-header-title">User Search</p>
                  <a href="#" class="card-header-icon" aria-label="more options">
                    <span class="icon">
                      <i class="fa fa-angle-down" aria-hidden="true"></i>
                    </span>
                  </a>
                </header>
                <div class="card-content">
                  <div class="content">
                    <div class="control has-icons-left has-icons-right">
                      <input class="input is-large" type="text" placeholder />
                      <span class="icon is-medium is-left">
                        <i class="fa fa-search"></i>
                      </span>
                      <span class="icon is-medium is-right">
                        <i class="fa fa-check"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMobileMenu: false
    };
  },
  methods: {
    toggleMenu() {
      this.showMobileMenu = !this.showMobileMenu;
    }
  }
};
</script>

<style lang="scss" scoped>
.firstItems {
  display: inline-block;
}
.secondItems {
  display: inline-block;
}
.columns {
  width: 100%;
  height: 100%;
  margin-left: 0;
}
.menu-label {
  color: #8f99a3;
  letter-spacing: 1.3;
  font-weight: 700;
}
.menu-list a {
  color: #0f1d38;
  font-size: 14px;
  font-weight: 700;
}
.menu-list a:hover {
  background-color: transparent;
  color: #276cda;
}
.menu-list a.is-active {
  background-color: transparent;
  color: #276cda;
  font-weight: 700;
}
.card {
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18);
  margin-bottom: 2rem;
}
.card-header-title {
  color: #8f99a3;
  font-weight: 400;
}
.info-tiles {
  margin: 1rem 0;
}
.info-tiles .subtitle {
  font-weight: 300;
  color: #8f99a3;
}
.hero.welcome.is-info {
  background: #36d1dc;
  background: -webkit-linear-gradient(to right, #5b86e5, #36d1dc);
  background: linear-gradient(to right, #5b86e5, #36d1dc);
}
.hero.welcome .title,
.hero.welcome .subtitle {
  color: hsl(192, 17%, 99%);
}
.container {
  margin-top: 3%;
}
.card .content {
  font-size: 14px;
}
.card-footer-item {
  font-size: 14px;
  font-weight: 700;
  color: #8f99a3;
}
.card-footer-item:hover {
}
.card-table .table {
  margin-bottom: 0;
}
.events-card .card-table {
  max-height: 250px;
  overflow-y: scroll;
}
</style>