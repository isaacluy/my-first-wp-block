import { __ } from "@wordpress/i18n";
import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";
// import { TextControl } from "@wordpress/components";
import "./editor.scss";

export default function Edit(/* { attributes, setAttributes } */) {
	const blockProps = useBlockProps();
	// const ALLOWED_BLOCKS = ["core/image", "core/paragraph"];
	const MY_TEMPLATE = [
		["core/image", {}],
		["core/heading", { placeholder: "<Planeta> Favorable" }],
		["core/paragraph", { placeholder: "Favorable" }],
	];
	// const MY_TEMPLATE = [["core/columns", {}]];

	return (
		<section {...blockProps}>
			<InnerBlocks template={MY_TEMPLATE} templateLock="all" />
		</section>
	);
}

/* <TextControl
value={attributes.message}
onChange={(val) => setAttributes({ message: val })}
/> */
