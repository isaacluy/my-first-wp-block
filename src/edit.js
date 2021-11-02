import { __ } from "@wordpress/i18n";
import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";
// import { TextControl } from "@wordpress/components";
import "./editor.scss";

export default function Edit(/* { attributes, setAttributes } */) {
	const blockProps = useBlockProps();

	return (
		<section {...blockProps}>
			<InnerBlocks />
		</section>
	);
}

/* <TextControl
value={attributes.message}
onChange={(val) => setAttributes({ message: val })}
/> */
