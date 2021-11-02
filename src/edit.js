import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";
import { Placeholder, TextControl } from "@wordpress/components";
import "./editor.scss";

export default function Edit({ attributes, isSelected, setAttributes }) {
	return (
		<div {...useBlockProps()}>
			{attributes.message && !isSelected ? (
				<div>{attributes.message}</div>
			) : (
				<Placeholder
					label={__("My First Block", "my-first-block")}
					instructions={__("Add your message", "my-first-block")}
				>
					<TextControl
						value={attributes.message}
						onChange={(val) => setAttributes({ message: val })}
					/>
				</Placeholder>
			)}
		</div>
	);
}
