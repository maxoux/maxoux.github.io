<template>
  <section class="sector extended sector_2 description_container">
    <h1>Description</h1>
    <div class="picture"></div>
    <div class="description">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis quam eget
        pulvinar malesuada. Mauris vitae vulputate ligula. Morbi egestas, ipsum eget
        hendrerit ornare, augue purus volutpat ex, vel fringilla nisl odio eget odio.
        Donec ultrices vel ligula id aliquet. Vestibulum in arcu enim. Ut finibus congue
        nisi sagittis varius. Sed tincidunt nec felis at feugiat. In lacus velit, molestie
        et rhoncus eget, vulputate in arcu. Suspendisse et molestie mi, in molestie nulla.
        Phasellus dapibus tellus eget feugiat hendrerit. Quisque elementum, nibh ac
        scelerisque malesuada, ex nisl efficitur felis, at vestibulum enim nunc nec magna.
        Integer ornare mi diam, sit amet fermentum diam auctor nec. Sed non aliquam mi.
        Curabitur egestas dui et ex tristique laoreet. Quisque hendrerit est ac erat
        congue, in dictum odio cursus. Nunc maximus dolor et urna egestas suscipit. Nam
        faucibus at enim eu pellentesque. Quisque justo lacus, placerat sit amet aliquet
        id, semper in odio. Nullam a congue augue. In ullamcorper tincidunt odio nec
        eleifend. Aenean pharetra fermentum pulvinar. Morbi vitae ullamcorper mauris. Nam
        ac tempor tortor, aliquam lobortis est. Mauris quis sodales dui. Vestibulum quis
        est vitae augue tempor laoreet. Pellentesque ut finibus justo. Praesent nibh
        augue, fermentum in mauris sed, lacinia lacinia mauris. Nam mattis risus ipsum, ut
        sagittis leo lobortis luctus. Phasellus et scelerisque mi, nec scelerisque enim.
        Praesent justo turpis, luctus id ullamcorper et, suscipit non purus. Nullam cursus
        quam ut tellus blandit ultricies. Ut sed ex suscipit, pulvinar metus a, accumsan
        libero. Praesent rhoncus vitae erat vitae tincidunt. Sed eleifend cursus quam, et
        dignissim odio vehicula tempor. Nulla pretium tincidunt quam, id vulputate velit
        malesuada at. Nam quis placerat ipsum. Donec accumsan libero tincidunt faucibus
        ornare.
      </p>
    </div>
    <div class="cta">
      <button class="button">Me contacter</button>
      <button class="button">Télécharger CV</button>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .description_container {
    .picture {
      aspect-ratio: 0.72;
      float: left;
      margin-right: 20px;
      width: 30%;
      background-color: #646cff;
    }

    .description {
      font-size: 1.2rem;
    }

    .cta {
      margin-top: 30px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      gap: 30px;
      width: 100%;

      & > * {
        height: 54px;
        background: transparent;
        border-color: #646cff;
      }
    }
  }
</style>
