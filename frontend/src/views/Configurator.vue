<template>
  <p class="test tw-text-4xl tw-text-center tw-w-100 tw-m-40">
    This is the Configurator Page! <br />
    WIP
  </p>
  
  <div class ="tw-ml-8 tw-mr-8 tw-grid tw-grid-cols-2">
    <div>
      <div class ="tw-grid tw-grid-cols-2">
        <div class ="tw-ml-8 tw-mr-8">
          <p class="tw-text-5xl tw-font-bold tw-tx-hauptfarbe">Schrankkonfigurator</p>
        </div>
        <div class="talk-bubble tri-right round right-in">
          <div class="talktext">
            <p class="tw-text-4xl tw-text-white tw-text-center">Chatbot<br/></p>
          </div>
        </div>
      </div>
      
        <div class="tw-ml-8 tw-mr-8 tw-text-2xl tw-tx-hauptfarbe">
          <div class ="tw-mb-4">
            Böden auswählen
          </div>
          <div class="tw-border-t tw-border-b tw-py-4 tw-grid tw-grid-cols-2 tw-gap-4 bg-lightblue tw-shadow-inner tw-w-full">
              <div class="tw-flex tw-flex-col tw-justify-start">
                <div class="tw-flex tw-flex-col tw-px-4 tw-object-cover tw-justify-items-start tw-overflow-hidden">
                  <img src="/img/Customer_is_king.jpeg" alt="Error" class="tw-h-40 tw-w-60 tw-inline-block tw-pl-4"/>
                </div>
              </div>
              <div class="tw-flex tw-flex-col">
                <div class="tw-flex tw-flex-col tw-gap-4">
                  <p class="tw-text-2xl">
                    Holzart
                  </p>
                  <p class="tw-text-xl text_font">
                    Anzahl Böden
                  </p>
                </div>
              </div>
            </div>

        </div>
    </div>

    <div>
      <p class="tw-text-5xl tw-font-bold tw-tx-hauptfarbe">Preisliste</p>
    </div>
  </div>

</template>

<script>
export default {
  name: "Configurator",
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




@import url("https://cdn.tuk.dev/dist/css/tailwind-v2.2.11.min.css");
</style>
