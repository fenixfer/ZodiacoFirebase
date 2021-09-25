<template>
    <!-- <div class="row">
        <div class="col-lg-7 col-md-4 col-sm-7">
            <q-img src="~/src/assets/carrusel1.jpg" style="height: 480px; width: 360px"></q-img>
        </div>
            <div class="col-lg-5 col-md-5 col-sm-5 q-pt-xl">
            
            <div class="">
                <div class="text-h5 text-center text-bold q-pt-xl">Login to continue</div>
            </div>

        </div>
    </div> -->
    <!-- <div class="centro"> -->
    <!-- <q-responsive :ratio="16/9"> -->

    <div class="row">

        
       <div class="form2"> 
            <q-img src="~/src/assets/carrusel1.jpg" style="height:500px" class="estiloimagen"> </q-img>
        </div>
        <q-form action class="form"> 
            
            <q-item-label class="title">Login</q-item-label>
            <q-item-label class="form-label" for="#email">Email:</q-item-label>
            <q-input type="email" id="email" required placeholder="Email"/>
            <q-item-label class="form-label" for="#password">Password:</q-item-label>
            <q-input type="password" id="password" placeholder="Password"/>
            <q-input class="form-submit" type="submit" value="Login" />
    
        </q-form>
    </div>
    <!-- </q-responsive> -->
    <!-- </div> -->


    <!-- </div> -->
    <!--</div>-->

        <!-- <q-img src="~/src/assets/carrusel1.jpg" style="height: 480px; width: 360px">
        </q-img> -->
    
</template>

<script>
export default {
    name: 'Login',
    data(){
        return{

        }
    }
}
</script>

<style lang="scss" scoped>
.login {
  padding: 2rem;
}
.title {
  text-align: center;
}
.form {
//---display: inline-block;
  //margin: 20px;
  //padding: 20px;
  margin: 9rem -500px;
  //display: flex;
  //---flex-direction: column;
  //--justify-content: center;
  //height: 30%;
border-top-right-radius: 20px;
  border-end-end-radius: 20px;
  width: 20%;
  //--min-width: 350px;
  //--max-width: 100%;
  background: rgba(23, 109, 42, 0.9);
  //border-radius: 20px;
  border-top-right-radius: 25px;
  border-end-end-radius: 25px;
  padding: 40px;
  //Este para resaltar borde
  //box-shadow: 0 4px 20px 8px rgba(20, 117, 52, 0.3);
}
.form2 {
  margin: 9rem 500px;
  //display: flex;
  //--display: inline-block;
  //margin: 20px;
  //padding: 10px;
  //--flex-direction: column;
  //--justify-content: center;
  //height: 30%;
  width: 20%;
  //--min-width: 100px;
  //--max-width: 100%;
  background: rgba(96, 99, 97, 0.9);
  border-radius: 25px;
  //padding: 10px;
  //Este para resaltar borde
  box-shadow: 0 4px 20px 8px rgba(20, 117, 52, 0.3);
}
.estiloimagen{
    border-top-left-radius: 25px;
    //border-top-right-radius: 20px;
    border-end-start-radius : 25px;
}
//lo pondre en el centro
.centro{
    justify-content: center;
}
.form-label {
  //margin-top: 2rem;
  color: white;
  //margin-bottom: 0.5rem;
//   &:first-of-type {
//     margin-top: 0rem;
//   }
}
.form-input {
  //padding: 10px 15px;
  background: none;
  background-image: none;
  border: 1px solid white;
  color: white;
  &:focus {
    outline: 0;
    border-color: #1ab188;
  }
}
.form-submit {
  background: #1ab188;
  border: none;
  color: white;
  margin-top: 3rem;
  padding: 1rem 0;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #0b9185;
  }
}
</style>