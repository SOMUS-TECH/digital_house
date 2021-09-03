<template>
    <!-- partial -->
    <div class="main-panel">
      <div class="content-wrapper">
        
        
        <div class="row">
            <div class="col-12">
              <div class="row">
                <div class="col-12 col-sm-6 col-md-6 col-xl-4 grid-margin stretch-card">
                  <div class="card">
                    <div class="card-body">
                      <h4 class="card-title">Number of Agent</h4>
                      <div class="d-flex justify-content-between">
                        <p class="text-muted">Agents</p>
                        <p class="text-muted">40</p>
                      </div>
                      <div class="progress progress-md">
                        <div class="progress-bar bg-info w-25" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-sm-6 col-md-6 col-xl-4 grid-margin stretch-card">
                  <div class="card">
                    <div class="card-body">
                      <h4 class="card-title">Number of Tenant</h4>                      
                      <div class="d-flex justify-content-between">
                        <p class="text-muted">Tenant</p>
                        <p class="text-muted">120</p>
                      </div>
                      <div class="progress progress-md">
                        <div class="progress-bar bg-success w-25" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-sm-6 col-md-6 col-xl-4 grid-margin stretch-card">
                  <div class="card">
                    <div class="card-body">
                      <h4 class="card-title">Number of Properties</h4>
                      <div class="d-flex justify-content-between">
                        <p class="text-muted">Properties</p>
                        <p class="text-muted">504</p>
                      </div>
                      <div class="progress progress-md">
                        <div class="progress-bar bg-danger w-25" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        
        
        
        <div class="row">
          <div class="col-md-12 grid-margin stretch-card">
            <div class="card">
              <div class="card-body">
                <p class="card-title">Properties Table</p>
                <div class="row">
                  <div class="col-12">
                    <div class="table-responsive">
                      <table id="example" class="display expandable-table" style="width:100%">
                        <thead>
                          <tr>
                            <th>Quote#</th>
                            <th>Product</th>
                            <th>Business type</th>
                            <th>Policy holder</th>
                            <th>Premium</th>
                            <th>Status</th>
                            <th>Updated at</th>
                            <th></th>
                          </tr>
                        </thead>
                    </table>
                    </div>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
      </div>
      <!-- content-wrapper ends -->
     <Footer />
    </div>
    <!-- main-panel ends -->
</template>

<script>
import Footer from './Footer.vue';
export default {
    name: 'Properties',
    components: {
    Footer,
  
  }
}
</script>