import { __ } from "@wordpress/i18n";
import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";
// import { TextControl } from "@wordpress/components";
import "./editor.scss";

export default function Edit(/* { attributes, setAttributes } */) {
	const blockProps = useBlockProps();
	const ALLOWED_BLOCKS = ["core/image", "core/paragraph"];

	return (
		<section {...blockProps}>
			<InnerBlocks allowedBlocks={ALLOWED_BLOCKS} />
		</section>
	);
}

/* <TextControl
value={attributes.message}
onChange={(val) => setAttributes({ message: val })}
/> */
