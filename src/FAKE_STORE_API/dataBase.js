//very important topic to understand which is local storage

// const addToDataBase = (id) => {
  // const quantity = localStorage.getItem(id);
  //ekhane mainly dekhteci je localstorage e ei id er kono key ase kina?...jodi thake taile ek bepar ar jodi na thake taile arek bepar..ekhn shuru te thakbe na savabik!!..quantity er value thakbe null shuru te..

  //jkhn e call korbo tkhn id ta asbe and jodi ei id(key) er kono value age na thake taile eta set hbe 1 hisebe,right?

  //ar jodi thake tahole quantity er value barte thakbe,ok?sevabe set korbo

  // if (quantity) {
    //ekhane dekhteci quanity ase na nai!!jodi theke thake tahole ei condition e dhukbe and eitar value increase korbe!!

    // const newQuan = +quantity + 1; //var er age + dile number e convert hoy!!

    // localStorage.setItem(id, newQuan); //chilo dekhe quantity barailam
  // } else {
    //ekhane null howay condition er karone key er value 1 set kortece
    // localStorage.setItem(id, 1);
  // }

  //abar jkhn click korbo new kono id thakle setar value 1 boshabe ar jodi dekhe ekhan theke giye je ase then quantity er value baray dibe
// };




export { addToDataBase };
