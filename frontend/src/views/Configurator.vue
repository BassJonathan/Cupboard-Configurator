<template>
<!--
  <div class ="tw-ml-8 tw-mr-8 tw-grid tw-grid-cols-3">
    <div class="tw-col-span-2">
      <div class ="tw-grid tw-grid-cols-2">
        <div class ="tw-ml-8 tw-mr-8">
          <p class="tw-text-5xl tw-mb-8 tw-font-bold tw-tx-hauptfarbe">Schrankkonfigurator</p>
        </div>
      </div>
      <div class="tw-overflow-auto tw-h-4/6">
      
        <div class="tw-ml-8 tw-mr-8 tw-mb-20 tw-text-2xl tw-tx-hauptfarbe">
          <div class ="tw-mb-4">
            Böden auswählen
          </div>
          <div class="tw-border-t tw-border-b tw-py-4 tw-grid tw-grid-cols-3 tw-gap-4 bg-lightblue tw-shadow-inner tw-w-full">
              <div class="tw-flex tw-flex-col tw-justify-start">
                <div class="tw-flex tw-flex-col tw-px-4 tw-object-cover tw-justify-items-start tw-overflow-hidden tw-col-span-2">
                  <img src="/img/Customer_is_king.jpeg" alt="Error" class="tw-h-40 tw-w-60 tw-inline-block tw-pl-4"/>
                </div>
              </div>
              <div class="tw-flex tw-flex-col tw-col-span-2">
                <div class="tw-mb-8 tw-grid tw-grid-cols-10">
                  <div class="tw-mb-8 tw-flex tw-flex-col tw-py-2 tw-gap-4 tw-bg-white tw-col-span-8">
                    <div class="tw-ml-8 tw-text-2xl ">
                      Holzart
                    </div>
                  </div>
                  <div class="tw-ml-8 tw-mr-4">
                    <div class="dropdown inline-block relative">
                      <button class="tw-mr-4 bg-white tw-text-gray-700 tw-font-semibold tw-py-2 tw-px-4 tw-rounded tw-inline-flex tw-items-center">
                        <span class="mr-1">Mehr</span>
                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
                      </button>
                      <ul class="dropdown-menu absolute hidden text-gray-700 pt-1">
                        <li class=""><a class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Buche<img src="/img/Customer_is_king.jpeg" alt="Error" class="tw-h-12 tw-inline-block tw-pl-4"/></a></li>
                        <li class=""><a class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Eiche<img src="/img/Customer_is_king.jpeg" alt="Error" class="tw-h-12 tw-inline-block tw-pl-4"/></a></li>
                        <li class=""><a class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Fichte<img src="/img/Customer_is_king.jpeg" alt="Error" class="tw-h-12 tw-inline-block tw-pl-4"/></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="tw-grid tw-grid-cols-10">
                  <div class="tw-mr-1 tw-mb-8 tw-flex tw-flex-col tw-gap-4 tw-bg-white tw-col-span-8 tw-py-2">
                    <div class="tw-ml-8 tw-text-2xl ">
                      Anzahl Böden
                    </div>
                  </div>
                  <button type="button" class="tw-col-span-1 btn btn-primary tw-h-4/6 tw-text-2xl tw-py-2 tw-px-4 tw-mr-1 tw-ml-8 tw-bg-white tw-text-black tw-flex tw-justify-center"> ▲ </button>
                  <button type="button" class="tw-col-span-1 btn btn-primary tw-h-4/6 tw-text-2xl tw-py-2 tw-px-4 tw-mr-8 tw-ml-1 tw-bg-white tw-text-black tw-flex tw-justify-center"> ▼ </button>
                </div>
              </div>
            </div>
          </div>

 
        <div class="tw-ml-8 tw-mr-8 tw-mb-20 tw-text-2xl tw-tx-hauptfarbe">
          <div class ="tw-mb-4">
            Stangen auswählen
          </div>
          <div class="tw-border-t tw-border-b tw-py-4 tw-grid tw-grid-cols-3 tw-gap-4 bg-lightblue tw-shadow-inner tw-w-full">
              <div class="tw-flex tw-flex-col tw-justify-start">
                <div class="tw-flex tw-flex-col tw-px-4 tw-object-cover tw-justify-items-start tw-overflow-hidden tw-col-span-2">
                  <img src="/img/Customer_is_king.jpeg" alt="Error" class="tw-h-40 tw-w-60 tw-inline-block tw-pl-4"/>
                </div>
              </div>
              <div class="tw-flex tw-flex-col tw-col-span-2">
                <div class="tw-mt-8 tw-grid tw-grid-cols-10">
                  <div class="tw-mr-1 tw-mb-8 tw-flex tw-flex-col tw-gap-4 tw-bg-white tw-col-span-8 tw-py-2">
                    <div class="tw-ml-8 tw-text-2xl ">
                      Anzahl Stangen
                    </div>
                  </div>
                  <button type="button" class="tw-col-span-1 btn btn-primary tw-h-4/6 tw-text-2xl tw-py-2 tw-px-4 tw-mr-1 tw-ml-8 tw-bg-white tw-text-black tw-flex tw-justify-center"> ▲ </button>
                  <button type="button" class="tw-col-span-1 btn btn-primary tw-h-4/6 tw-text-2xl tw-py-2 tw-px-4 tw-mr-8 tw-ml-1 tw-bg-white tw-text-black tw-flex tw-justify-center"> ▼ </button>
                </div>
              </div>
            </div>
          </div>


         <div class="tw-ml-8 tw-mr-8 tw-mb-20 tw-text-2xl tw-tx-hauptfarbe">
          <div class ="tw-mb-4">
            Körbe auswählen
          </div>
          <div class="tw-border-t tw-border-b tw-py-4 tw-grid tw-grid-cols-3 tw-gap-4 bg-lightblue tw-shadow-inner tw-w-full">
              <div class="tw-flex tw-flex-col tw-justify-start">
                <div class="tw-flex tw-flex-col tw-px-4 tw-object-cover tw-justify-items-start tw-overflow-hidden tw-col-span-2">
                  <img src="/img/Customer_is_king.jpeg" alt="Error" class="tw-h-40 tw-w-60 tw-inline-block tw-pl-4"/>
                </div>
              </div>
              <div class="tw-flex tw-flex-col tw-col-span-2">
                <div class="tw-mt-8 tw-grid tw-grid-cols-10">
                  <div class="tw-mr-1 tw-mb-8 tw-flex tw-flex-col tw-gap-4 tw-bg-white tw-col-span-8 tw-py-2">
                    <div class="tw-ml-8 tw-text-2xl ">
                      Anzahl Körbe
                    </div>
                  </div>
                  <button type="button" class="tw-col-span-1 btn btn-primary tw-h-4/6 tw-text-2xl tw-py-2 tw-px-4 tw-mr-1 tw-ml-8 tw-bg-white tw-text-black tw-flex tw-justify-center"> ▲ </button>
                  <button type="button" class="tw-col-span-1 btn btn-primary tw-h-4/6 tw-text-2xl tw-py-2 tw-px-4 tw-mr-8 tw-ml-1 tw-bg-white tw-text-black tw-flex tw-justify-center"> ▼ </button>
                </div>
              </div>
            </div>
          </div>

 
        <div class="tw-ml-8 tw-mr-8 tw-mb-20 tw-text-2xl tw-tx-hauptfarbe">
          <div class ="tw-mb-4">
            Schubladen auswählen
          </div>
          <div class="tw-border-t tw-border-b tw-py-4 tw-grid tw-grid-cols-3 tw-gap-4 bg-lightblue tw-shadow-inner tw-w-full">
              <div class="tw-flex tw-flex-col tw-justify-start">
                <div class="tw-flex tw-flex-col tw-px-4 tw-object-cover tw-justify-items-start tw-overflow-hidden tw-col-span-2">
                  <img src="/img/Customer_is_king.jpeg" alt="Error" class="tw-h-40 tw-w-60 tw-inline-block tw-pl-4"/>
                </div>
              </div>
              <div class="tw-flex tw-flex-col tw-col-span-2">
                <div class="tw-mb-8 tw-grid tw-grid-cols-10">
                  <div class="tw-mb-8 tw-flex tw-flex-col tw-py-2 tw-gap-4 tw-bg-white tw-col-span-8">
                    <div class="tw-ml-8 tw-text-2xl ">
                      Holzart
                    </div>
                  </div>
                  <div class="tw-ml-8">
                    <div class="dropdown inline-block relative">
                      <button class="bg-white tw-text-gray-700 tw-font-semibold tw-py-2 tw-px-4 tw-rounded tw-inline-flex tw-items-center">
                        <span class="mr-1">Mehr</span>
                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
                      </button>
                      <ul class="dropdown-menu absolute hidden text-gray-700 pt-1">
                        <li class=""><a class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Buche<img src="/img/Customer_is_king.jpeg" alt="Error" class="tw-h-12 tw-inline-block tw-pl-4"/></a></li>
                        <li class=""><a class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Eiche<img src="/img/Customer_is_king.jpeg" alt="Error" class="tw-h-12 tw-inline-block tw-pl-4"/></a></li>
                        <li class=""><a class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Fichte<img src="/img/Customer_is_king.jpeg" alt="Error" class="tw-h-12 tw-inline-block tw-pl-4"/></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="tw-grid tw-grid-cols-10">
                  <div class="tw-mr-1 tw-mb-8 tw-flex tw-flex-col tw-gap-4 tw-bg-white tw-col-span-8 tw-py-2">
                    <div class="tw-ml-8 tw-text-2xl ">
                      Anzahl Schubladen
                    </div>
                  </div>
                  <button type="button" class="tw-col-span-1 btn btn-primary tw-h-4/6 tw-text-2xl tw-py-2 tw-px-4 tw-mr-1 tw-ml-8 tw-bg-white tw-text-black tw-flex tw-justify-center"> ▲ </button>
                  <button type="button" class="tw-col-span-1 btn btn-primary tw-h-4/6 tw-text-2xl tw-py-2 tw-px-4 tw-mr-8 tw-ml-1 tw-bg-white tw-text-black tw-flex tw-justify-center"> ▼ </button>
                </div>
              </div>
            </div>
          </div>
      </div>
           
      <div class="tw-flex tw-grid-cols-2 tw-justify-center">
      <button type="button" href="/cart" class="tw-col-span-1 btn btn-primary tw-text-2xl tw-w-2/6  tw-py-4 tw-px-8 tw-mt-8 tw-mb-8 tw-mr-8 tw-ml-8 bg-hauptfarbe tw-text-white tw-flex tw-justify-center"> Direkt zum Warenkorb </button>
      <router-link to="/cart"><img src="/img/icons/arrow_right.png" alt="Error"  class="tw-h-20 tw-px-8 tw-mt-8 tw-mb-8 tw-mr-8 tw-ml-8 tw-inline-block tw-pl-4"/></router-link>
      </div>

    </div>

    <div>
      <div class="tw-ml-8 tw-mb-8 tw-flex tw-justify-left flex-wrap tw-h-12">
          <p class="tw-text-5xl tw-font-bold tw-tx-hauptfarbe">Preisliste</p>
      </div>
      <div class="tw-ml-8 tw-mt-8 tw-flex tw-justify-left tw-h-12">
          <p class="tw-text-2xl tw-tx-hauptfarbe">Ihre aktuelle Konfiguration</p>
      </div>
      <div class="tw-ml-8 tw-mr-8 tw-mb-8 tw-w-full tw-flex tw-justify-left">
          <div class="tw-mr-8 tw-w-full tw-text-2xl tw-text-white bg-hauptfarbe">
            <div>1x Korpus: 100€</div>
            <div>2x Böden: 150€</div>
            <div>4x Stangen: 200€</div>
            <div>-----------------</div>
            <div>Gesamt: 450€</div>
          </div>
      </div>
      <div class="tw-ml-8 border-4 tw-text-2xl tw-tx-hauptfarbe border-bg-hauptfarbe tw-flex tw-justify-left">
        <router-link to="/cart">Zum Warenkorb hinzufügen <img src="/img/icons/shopping-cart.jpg" alt="Error" class="tw-h-12 tw-inline-block tw-pl-4"/></router-link>
      </div>
      <div class="tw-ml-8 tw-mt-8 tw-flex tw-justify-left tw-text-white tw-bg-green-dark">
            <router-link to="/about">Gemeinsam für Nachhaltigkeit, mit unseren Produkten stehen Sie für vollständig durch erneuerbare Energie betriebene Produktion, Filialen und Büros. Lokale Produktionspartner und Holzlieferanten. FSC-Zertifikat Aufforstungszertifikat unseres Holzes</router-link>
            <img src="/img/footer/FSC_Logo.jpeg" alt="Error" class="tw-h-24 tw-inline-block tw-align-bottom"/>
      </div>
      
    </div>
  </div>
-->
    <div class="tw-w-full tw-mt-20">
		<div>
			<ProductTile :product=selectables />
		</div>
		<div class="tw-w-full tw-flex tw-justify-between">
			<div class="tw-w-2/3">
				<div v-for="test in selectables.exteriors" :key="test.id">
					<Exterior :exterior="test" />
				</div>
				<div v-for="interior in selectables.interiors" :key="interior.id">
					<Interior :interior="interior" :product=selectables />
				</div>
				<div>
					<Material :materials=selectables.materials />
				</div>
				<div v-for="accessory in selectables.accessories" :key="accessory.id">
					<Accessory :accessory="accessory" />
				</div>
			</div>
			<div class="tw-h-auto tw-w-1/3">
				<div class="tw-w-full tw-h-20 tw-sticky tw-top-40 tw-bg-gray-400 tw-rounded-lg tw-mt-6">
					<div class="tw-text-3xl tw-font-bold">
						Momentane Konfiguration	
					</div>
				</div>
			</div>
		</div>
		
		<div>
		</div>
    </div>
</template>

<script>
import ProductTile from "@/components/Configurator/ProductTile.vue"
import Exterior from "@/components/Configurator/Exterior.vue"
import Interior from "@/components/Configurator/Interior.vue"
import Material from "@/components/Configurator/Material.vue"
import Accessory from "@/components/Configurator/Accessory.vue"

export default {
  name: "Configurator",
  components: {
	  ProductTile,
	  Exterior,
	  Interior,
	  Material,
	  Accessory,
  },
  data() {
    return {
      selectables: [],
    }
  },
  async mounted() {
    const { data } = await this.axios.get("catalogue/products/2");
    this.selectables = data;
    console.log(this.selectables);
  },
};
</script>

<style scoped>
h1 {
  font-size: 5vw;
}

.tx-hauptfarbe {
  color: #012840;
}
.bg-hauptfarbe {
  background-color: #012840;
}
.tx-yellow {
  color: #8c8a0a;
}
.tx-lightblue{
  color: #115D8C;
}
.bg-lightblue {
  background-color: #115D8C;
}

.talk-bubble {
	margin: 40px;
  display: inline-block;
  position: relative;
	width: 200px;
	height: auto;
	background-color: #012840;
}
.round{
  border-radius: 30px;
	-webkit-border-radius: 30px;
	-moz-border-radius: 30px;
}
.tri-right.right-in:after{
	content: ' ';
	position: absolute;
	width: 10;
	height: 10;
  left: auto;
	right: -20px;
  top: 35px;
	bottom: auto;
	border: 12px solid;
	border-color:  transparent  transparent #012840 #012840;
}
.talktext{
  padding: 1em;
	text-align: left;
  line-height: 1.5em;
}
.dropdown:hover .dropdown-menu {
  display: block;
}

</style>
