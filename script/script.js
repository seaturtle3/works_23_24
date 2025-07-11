const images = [
  { src: 'img/thum/thum_01/angel.jpg', details: ['img/pages/page_01/img_angel/angel01.jpg', 'img/pages/page_01/img_angel/angel02.jpg'] },
  { src: 'img/thum/thum_01/cello.jpg', details: ['img/pages/page_01/img_cello/cello_01.jpg', 'img/pages/page_01/img_cello/cello_02.jpg'] },
  { src: 'img/thum/thum_01/choucream.jpg', details: ['img/pages/page_01/img_chou/choucream_01.jpg', 'img/pages/page_01/img_chou/choucream_02.jpg'] },
  { src: 'img/thum/thum_01/dino_kids.jpg', details: ['img/pages/page_01/img_dino_kids.jpg'] },
  { src: 'img/thum/thum_01/egg.jpg', details: ['img/pages/page_01/img_egg/egg_01.jpg', 'img/pages/page_01/img_egg/EGG_02.jpg'] },
  { src: 'img/thum/thum_01/guimauve.jpg', details: ['img/pages/page_01/img_gui/waffle_guimauve_01.jpg', 'img/pages/page_01/img_gui/waffle_guimauve_02.jpg'] },
  { src: 'img/thum/thum_01/mamong.jpg', details: ['img/pages/page_01/img_mamong/mamong_01.jpg', 'img/pages/page_01/img_mamong/mamong_02.jpg'] },
  { src: 'img/thum/thum_01/merrysheep.jpg', details: ['img/pages/page_01/img_merrysheep/merrysheep_01.jpg', 'img/pages/page_01/img_merrysheep/merrysheep_02.jpg'] },
  { src: 'img/thum/thum_01/pintuk.jpg', details: ['img/pages/page_01/img_pintuk.jpg'] },
  { src: 'img/thum/thum_01/poobao.jpg', details: ['img/pages/page_01/img_poobao_modal.jpg'] },

  { src: 'img/thum/thum_02/thum_azure.jpg', details: ['img/pages/page_02/img_azure/azure_01.jpg', 'img/pages/page_02/img_azure/azure_02.jpg'] },
  { src: 'img/thum/thum_02/thum_bodre.jpg', details: ['img/pages/page_02/img_bodre/bodre_01.jpg', 'img/pages/page_02/img_bodre/bodre_02.jpg'] },
  { src: 'img/thum/thum_02/thum_celine.jpg', details: ['img/pages/page_02/img_celine/celine_01.jpg', 'img/pages/page_02/img_celine/celine_02.jpg'] },
  { src: 'img/thum/thum_02/thum_ellen.jpg', details: ['img/pages/page_02/img_ellen/ellen.jpg'] },
  { src: 'img/thum/thum_02/thum_kona.jpg', details: ['img/pages/page_02/img_kona/kona_01.jpg', 'img/pages/page_02/img_kona/kona_02.jpg'] },
  { src: 'img/thum/thum_02/thum_lusia.jpg', details: ['img/pages/page_02/img_lusia/lusia_01.jpg', 'img/pages/page_02/img_lusia/lusia_02.jpg'] },
  { src: 'img/thum/thum_02/thum_mystic.jpg', details: ['img/pages/page_02/img_mystic/mystic.jpg'] },
  { src: 'img/thum/thum_02/thum_realnature.jpg', details: ['img/pages/page_02/img_realnature/realnature_01.jpg', 'img/pages/page_02/img_realnature/realnature_02.jpg'] },
  { src: 'img/thum/thum_02/thum_ricecake.jpg', details: ['img/pages/page_02/img_ricecake/ricecake_01.jpg', 'img/pages/page_02/img_ricecake/ricecake_02.jpg'] },
  { src: 'img/thum/thum_02/thum_yang.jpg', details: ['img/pages/page_02/img_yang/yang.jpg'] },

  { src: 'img/thum/thum_03/thum_aim.jpg', details: ['img/pages/page_03/aim.jpg'] },
  { src: 'img/thum/thum_03/thum_aqua.jpg', details: ['img/pages/page_03/aqua/aqua_01.jpg', 'img/pages/page_03/aqua/aqua_02.jpg'] },
  { src: 'img/thum/thum_03/thum_bonnie.jpg', details: ['img/pages/page_03/bonnie/bonnie_01.jpg', 'img/pages/page_03/bonnie/bonnie_02.jpg'] },
  { src: 'img/thum/thum_03/thum_ive.jpg', details: ['img/pages/page_03/ive.jpg'] },
  { src: 'img/thum/thum_03/thum_myth.jpg', details: ['img/pages/page_03/myth.jpg'] },
  { src: 'img/thum/thum_03/thum_ohsak.jpg', details: ['img/pages/page_03/ohsak/ohsak_01.jpg', 'img/pages/page_03/ohsak/ohsak_02.jpg'] },
  { src: 'img/thum/thum_03/thum_police.jpg', details: ['img/pages/page_03/police/police_01.jpg', 'img/pages/page_03/police/police_02.jpg'] },
  { src: 'img/thum/thum_03/thum_silhouette.jpg', details: ['img/pages/page_03/silhouette/silhouette_01.jpg', 'img/pages/page_03/silhouette/silhouette_02.jpg'] },
  { src: 'img/thum/thum_03/thum_still.jpg', details: ['img/pages/page_03/still/still_01.jpg', 'img/pages/page_03/still/still_02.jpg'] },
  { src: 'img/thum/thum_03/thum_veria.jpg', details: ['img/pages/page_03/veria/veria_01.jpg', 'img/pages/page_03/veria/veria_02.jpg'] },

  { src: 'img/thum/thum_04/thum_coolbear.jpg', details: ['img/pages/page_04/coolbear/coolbear_01.jpg', 'img/pages/page_04/coolbear/coolbear_02.jpg'] },
  { src: 'img/thum/thum_04/thum_coolsquare.jpg', details: ['img/pages/page_04/coolsquare/coolsquare_01.jpg', 'img/pages/page_04/coolsquare/coolsquare_02.jpg'] },
  { src: 'img/thum/thum_04/thum_dia.jpg', details: ['img/pages/page_04/dia/dia_01.jpg', 'img/pages/page_04/dia/dia_02.jpg'] },
  { src: 'img/thum/thum_04/thum_line.jpg', details: ['img/pages/page_04/line/line_01.jpg', 'img/pages/page_04/line/line_02.jpg'] },
  { src: 'img/thum/thum_04/thum_monogram.jpg', details: ['img/pages/page_04/monogram/monogram_01.jpg', 'img/pages/page_04/monogram/monogram_02.jpg'] },
  { src: 'img/thum/thum_04/thum_perfeit.jpg', details: ['img/pages/page_04/perfeit/perfeit_01.jpg', 'img/pages/page_04/perfeit/perfeit_02.jpg'] },
  { src: 'img/thum/thum_04/thum_summerline.jpg', details: ['img/pages/page_04/summerline/summerline_01.jpg', 'img/pages/page_04/summerline/summerline_02.jpg'] },
  { src: 'img/thum/thum_04/thum_sydney_cotton_matcover.jpg', details: ['img/pages/page_04/sydney_cotton/sydney_cotton_matcover_01.jpg', 'img/pages/page_04/sydney_cotton/sydney_cotton_matcover_02.jpg'] },
  { src: 'img/thum/thum_04/thum_sydney_polymodal-matcover.jpg', details: ['img/pages/page_04/sydney_polymodal/sydney_polymodal-matcover_01.jpg', 'img/pages/page_04/sydney_polymodal/sydney_polymodal-matcover_02.jpg'] },
  { src: 'img/thum/thum_04/thum_wavecool.jpg', details: ['img/pages/page_04/wavecool/wavecool_01.jpg', 'img/pages/page_04/wavecool/wavecool_02.jpg'] },

  { src: 'img/thum/thum_05/thum_barbie.jpg', details: ['img/pages/page_05/barbie/barbie_01.jpg', 'img/pages/page_05/barbie/barbie_02.jpg'] },
  { src: 'img/thum/thum_05/thum_beach.jpg', details: ['img/pages/page_05/beach/beach_01.jpg', 'img/pages/page_05/beach/beach_02.jpg'] },
  { src: 'img/thum/thum_05/thum_chungcho.jpg', details: ['img/pages/page_05/chungcho/chungcho_01.jpg', 'img/pages/page_05/chungcho/chungcho_02.jpg'] },
  { src: 'img/thum/thum_05/thum_coolingbear.jpg', details: ['img/pages/page_05/coolingbear/coolingbear_01.jpg', 'img/pages/page_05/coolingbear/coolingbear_02.jpg'] },
  { src: 'img/thum/thum_05/thum_cooljes.jpg', details: ['img/pages/page_05/cooljes/cooljes_01.jpg', 'img/pages/page_05/cooljes/cooljes_02.jpg'] },
  { src: 'img/thum/thum_05/thum_kass.jpg', details: ['img/pages/page_05/kass/kass_01.jpg', 'img/pages/page_05/kass/kass_02.jpg'] },
  { src: 'img/thum/thum_05/thum_melli.jpg', details: ['img/pages/page_05/melli/melli_01.jpg', 'img/pages/page_05/melli/melli_02.jpg'] },
  { src: 'img/thum/thum_05/thum_sherbet.jpg', details: ['img/pages/page_05/sherbet/sherbet_01.jpg', 'img/pages/page_05/sherbet/sherbet_02.jpg'] },
  { src: 'img/thum/thum_05/thum_sydney_cover.jpg', details: ['img/pages/page_05/sydney_micro_matcover/sydney_micro_matcover_01.jpg', 'img/pages/page_05/sydney_micro_matcover/sydney_micro_matcover_02.jpg'] },
  { src: 'img/thum/thum_05/thum_ultra.jpg', details: ['img/pages/page_05/ultra.jpg'] },

  { src: 'img/thum/thum_06/thum_cats.jpg', details: ['img/pages/page_06/cats/cats_01.jpg', 'img/pages/page_06/cats/cats_02.jpg'] },
  { src: 'img/thum/thum_06/thum_teo.jpg', details: ['img/pages/page_06/teo/teo_01.jpg', 'img/pages/page_06/teo/teo_02.jpg', 'img/pages/page_06/teo/teo_03.jpg'] },
  { src: 'img/thum/thum_06/thum_woody.jpg', details: ['img/pages/page_06/woody/woody_01.jpg', 'img/pages/page_06/woody/woody_02.jpg', 'img/pages/page_06/woody/woody_03.jpg'] }
];

document.addEventListener('DOMContentLoaded', function () {
  const thumbnail = document.querySelector(".js-container");
  const modal = document.querySelector(".mymodal");
  const modalBody = document.querySelector(".modal-body");
  const span = document.querySelector(".close");

  let htmlContent = '';
  images.forEach(image => {
    htmlContent +=
      `<div class="item">
      <img src="${image.src}" alt="Image" data-details='${JSON.stringify(image.details)}'>
      </div>`;
  });

  thumbnail.innerHTML = htmlContent;

  document.querySelectorAll('.item img').forEach(img => {
    img.addEventListener('click', function () {
      const details = JSON.parse(this.dataset.details);
      let detailsContent = '';
      details.forEach(detail => {
        detailsContent += `<img src="${detail}" alt="Detailed Image">`;
      });
      modalBody.innerHTML = detailsContent;
      modal.style.display = "block";
    });
  });

  span.onclick = function () {
    modal.style.display = "none";
  }

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
});