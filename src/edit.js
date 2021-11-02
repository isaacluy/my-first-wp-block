import { __ } from "@wordpress/i18n";
import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";
// import { TextControl } from "@wordpress/components";
import "./editor.scss";

export default function Edit(/* { attributes, setAttributes } */) {
	const blockProps = useBlockProps();
	const FAVORABLE_DESFAVORABLE = [
		[
			"core/columns",
			{ className: "mb-4 lg:flex lg:p-0 lg:space-x-4" },
			[
				[
					"core/column",
					{
						className:
							"w-full h-auto p-8 mb-4 bg-white rounded-xl space-y-4 shadow lg:w-1/2 lg:mb-0",
						anchor: "favorable",
					},
					[
						[
							"core/heading",
							{ placeholder: "<Planeta> Favorable", anchor: "favorable" },
						],
						[
							"core/paragraph",
							{
								placeholder:
									"Texto que habla sobre cuando el planeta está favorable...",
							},
						],
					],
				],
				[
					"core/column",
					{
						className:
							"w-full h-auto p-8 mb-4 bg-white rounded-xl space-y-4 shadow lg:w-1/2 lg:mb-0",
						anchor: "desfavorable",
					},
					[
						[
							"core/heading",
							{ placeholder: "<Planeta> Desfavorable", anchor: "desfavorable" },
						],
						[
							"core/paragraph",
							{
								placeholder:
									"Texto que habla sobre cuando el planeta está desfavorable...",
							},
						],
					],
				],
			],
		],
	];

	return (
		<section {...blockProps} id="grahas-page-block">
			<InnerBlocks template={FAVORABLE_DESFAVORABLE} templateLock="all" />
		</section>
	);
}

/* <TextControl
value={attributes.message}
onChange={(val) => setAttributes({ message: val })}
/> */
