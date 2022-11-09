<script>
import demo from '../../../components/Demo.vue'
import standart from '../../../components/examples/standard-component-doc.vue'
export default {
  components: {
    demo,
    standart
  },
  data() {
    return {comp: standart}
  }
}
</script>

# standard-component

Wow! This component is awesome.

## Example

<demo :componentObject="comp" />

## Source Code

@[code](../../src/components/StandardComponent/StandardComponent.vue)

## slots

...

## props

...
