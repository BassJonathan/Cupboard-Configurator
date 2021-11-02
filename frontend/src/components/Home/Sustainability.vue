<template>
  <div
    class="
      tw-border-t
      tw-border-b
      tw-py-8
      tw-grid
      tw-grid-cols-2
      tw-gap-8
      tw-bg-green
      tw-shadow-inner
    "
  >
    <div class="tw-flex tw-flex-col tw-justify-start">
      <div
        class="
          tw-flex
          tw-flex-col
          tw-w-full
          tw-px-8
          tw-object-cover
          tw-justify-items-start
          tw-overflow-hidden
        "
      >
        <img
          src="/img/sustainability.jpg"
          alt="Nachhaltigkeit"
          class="tw-rounded-xl"
        />
      </div>
    </div>
    <div class="tw-flex tw-flex-col">
      <div class="tw-flex tw-flex-col tw-gap-4">
        <p class="tw-text-3xl tw-font-extrabold heading_font">
          Gemeinsam für mehr Nachhaltigkeit
        </p>
        <p class="tw-text-xl text_font">
          Wir von der Cupboard Limited ermöglichen es Ihnen so einfach wie noch
          nie einen Beitrag für den Schutz unserer Umwelt zu leisten.
        </p>
        <p class="tw-text-lg">
          Mit dem Kauf unserer hochwertigen Produkte stehen Sie für nachhaltige,
          lokal und mit erneuerbarer Energie produzierte Schränke. <br />
          Das FSC®-Zertifiziert unseres Holzes garantiert eine kontinuierliche
          Wiederaufforstung der Wälder.
        </p>
        <div class="tw-mt-8"></div>
        <button
          type="button"
          class="btn btn-success tw-w-48 tw-h-12 tw-mx-auto tw-text-xl"
        >
          Erfahre mehr
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sustainability",
};
</script>

<style scoped></style>
