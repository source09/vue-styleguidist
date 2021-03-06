import { SlotDescriptor } from 'vue-docgen-api'
import { mdclean } from './utils'

export default (slots: SlotDescriptor[], subComponent = false): string => {
	return `
## Slots

| Name          | Description  | Bindings |
| ------------- | ------------ | -------- |
${slots
	.map(slot => {
		const { description: d, bindings, name } = slot
		const readableBindings = bindings && Object.keys(bindings).length ? JSON.stringify(bindings, null, 2) : '' // serialize bindings to display them ina readable manner
		return `| ${mdclean(name)} | ${mdclean(d || '')} | ${mdclean(readableBindings)} |` // remplace returns by <br> to allow them in a table cell
	})
	.join('\n')}
`
}
