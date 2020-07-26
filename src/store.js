import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

function test(){
  let arr = []

  for (let i = 4; i<=100; i++){
    arr.push({
      id: i, 
      name: `item${i}`,
      price: Math.floor(Math.random()*10000), 
      brand: 'test brand', 
      description: `this is a description`, 
      image: `https://picsum.photos/seed/${i}/400/500`
    })
  }
  return arr
}

export default new Vuex.Store({
  state: {
    currentitem: null,
    // right now store item is harcoded
    items: [
      {
        id: 1,
        name: 'item1',
        price: 2560,
        brand: 'good brand',
        description: `เสื้อโปโลลาคอสท์ รุ่น L.12.12 ทรงคลาสสิกฟิต

        การออกแบบที่เป็นซิกเนเจอร์จากเสื้อโปโลลาคอสท์ รุ่น L.12.12  ผ้าคอตตอนเปอติ ปีเก้ ส่วนผสมอันลงตัวระหว่างความสบายและความสวยงาม ความเก๋เเละความคลาสสิก เหมาะสำหรับทุกโอกาส เสื้อโปโลลาคอสท์ตัดด้วยทรงหลวมใส่สบาย ถ้าหากคุณผู้หญิงมีขนาดตัวอยู่ระหว่างสองไซส์ เราแนะนำให้เลือกไซส์ที่เล็กกว่า
        
        จั๊มขอบปกและแขนเสื้อ
        รอยผ่าสองกระดุม
        กระดุมวัสดุมุก
        ทรงคลาสสิก
        ผ้าคอตตอน เปอติ ปีเก้
        คอตตอน 100% 
        
        ไซส์ รอบอก (CM)
        
        XS = 2 = 94
        S = 3 = 98
        M = 4 = 102
        L = 5 = 106
        XL = 6 = 110
        XXL = 7 = 114`,
        image: 'https://backend.central.co.th/media/catalog/product/c/d/cds20703011-_2_.jfif_2.jpg?impolicy=resize&width=400'
      },
      {
        id: 2,
        name: 'item2',
        price: 256,
        brand: 'the better brand',
        description: `เสื้อโปโลลาคอสท์ รุ่น L.12.12 ทรงคลาสสิกฟิต

        การออกแบบที่เป็นซิกเนเจอร์จากเสื้อโปโลลาคอสท์ รุ่น L.12.12  ผ้าคอตตอนเปอติ ปีเก้ ส่วนผสมอันลงตัวระหว่างความสบายและความสวยงาม ความเก๋เเละความคลาสสิก เหมาะสำหรับทุกโอกาส เสื้อโปโลลาคอสท์ตัดด้วยทรงหลวมใส่สบาย ถ้าหากคุณผู้หญิงมีขนาดตัวอยู่ระหว่างสองไซส์ เราแนะนำให้เลือกไซส์ที่เล็กกว่า
        
        จั๊มขอบปกและแขนเสื้อ
        รอยผ่าสองกระดุม
        กระดุมวัสดุมุก
        ทรงคลาสสิก
        ผ้าคอตตอน เปอติ ปีเก้
        คอตตอน 100% 
        
        ไซส์ รอบอก (CM)
        
        XS = 2 = 94
        S = 3 = 98
        M = 4 = 102
        L = 5 = 106
        XL = 6 = 110
        XXL = 7 = 114`,
        image: 'https://backend.central.co.th/media/catalog/product/c/d/cds24624602-1.jpg?impolicy=resize&width=400'
      },
      {
        id: 3,
        name: 'item3',
        price: 1200,
        brand: 'common brand',
        description: `เสื้อโปโลลาคอสท์ รุ่น L.12.12 ทรงคลาสสิกฟิต

        การออกแบบที่เป็นซิกเนเจอร์จากเสื้อโปโลลาคอสท์ รุ่น L.12.12  ผ้าคอตตอนเปอติ ปีเก้ ส่วนผสมอันลงตัวระหว่างความสบายและความสวยงาม ความเก๋เเละความคลาสสิก เหมาะสำหรับทุกโอกาส เสื้อโปโลลาคอสท์ตัดด้วยทรงหลวมใส่สบาย ถ้าหากคุณผู้หญิงมีขนาดตัวอยู่ระหว่างสองไซส์ เราแนะนำให้เลือกไซส์ที่เล็กกว่า
        
        จั๊มขอบปกและแขนเสื้อ
        รอยผ่าสองกระดุม
        กระดุมวัสดุมุก
        ทรงคลาสสิก
        ผ้าคอตตอน เปอติ ปีเก้
        คอตตอน 100% 
        
        ไซส์ รอบอก (CM)
        
        XS = 2 = 94
        S = 3 = 98
        M = 4 = 102
        L = 5 = 106
        XL = 6 = 110
        XXL = 7 = 114`,
        image: 'https://backend.central.co.th/media/catalog/product/C/D/CDS16373594.jpg?impolicy=resize&width=400'
      },
      ...test()
    ],
    
  },
  mutations: {
    setitem(state, item){
      state.currentitem = item
    }
  },
  actions: {
    select({commit}, item){
      commit('setitem', item.id)
    }
  }
})
