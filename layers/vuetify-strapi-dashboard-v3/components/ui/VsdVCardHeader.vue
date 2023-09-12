<template>
  <div :style="`margin-top: ${props?.marginTop};padding-bottom: ${props.height}`">
    <v-card
        :height="props.height"
        :color="color || 'primary'"
        :tile="tile"
        :dark="dark || true"
        :class="`${classes} elevation-${getEelevation}`"
        :loading="loading"
    >
      <slot/>
    </v-card>
  </div>
</template>

<script setup>
const props = defineProps(['value', 'icon', 'height', 'color', 'marginTop', 'marginBottom', 'left', 'loading', 'paddingRight', 'align', 'justify', 'classes', 'dark', 'width', 'elevation', 'tile', 'marginRight', 'marginLeft']);
const loading = false

function getLeft() {
  if (props.left !== undefined) {
    return props.getMarginLeft
  } else {
    return 'auto'
  }
}

function getWidth() {
  if (props.icon !== undefined) {
    return '600px'
  } else if (props.width) {
    return props.width;
  } else {
    return '80%'
  }
}

function getEelevation() {
  if (props.elevation !== undefined) {
    return props.elevation
  } else {
    return '10'
  }
}

function getAlign() {
  if (props.icon !== undefined) {
    return 'center'
  } else if (props.align) {
    return props.align;
  } else {
    return 'right'
  }
}

function getJustify() {
  if (props.icon !== undefined) {
    return 'center'
  } else if (props.justify) {
    return props.justify;
  } else {
    return 'start'
  }
}

function getPadding() {
  if (props.icon !== undefined) {
    return '20px'
  } else {
    return '40px'
  }
}

function getPaddingRight() {
  if (props.paddingRight !== undefined) {
    return props.paddingRight
  } else if (props.icon !== undefined) {
    return 0;
  } else {
    return '20px'
  }
}

function getMargin() {
  if (props.marginTop) {
    return props.marginTop;
  } else if (props.icon !== undefined) {
    return '60px'
  } else {
    return '80px'
  }
}

function getMarginTop() {
  if (props.height !== undefined) {
    return (-1 * parseInt(props.height) / 2) + 'px';
  }
  if (props.icon !== undefined) {
    return '-30px'
  } else {
    return '-40px'
  }
}

function getMarginBottom() {
  if (props.marginBottom) {
    return props.marginBottom;
  } else if (props.icon !== undefined) {
    return '-30px'
  } else {
    return '-40px'
  }
}

function getHeight() {
  if (props.height !== undefined) {
    return props.height;
  }
  if (props.icon !== undefined) {
    return '60px'
  } else {
    return '80px'
  }
}

function getMarginRight() {
  if (props.marginRight) {
    return props.marginRight;
  } else if (props.icon !== undefined) {
    return '5%'
  } else {
    return '10%'
  }
}

function getMarginLeft() {
  if (props.marginLeft) {
    return props.marginLeft;
  } else if (props.icon !== undefined) {
    return 'auto'
  } else {
    return '5%'
  }
}
</script>
