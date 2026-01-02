const { Document, Packer, Paragraph, TextRun, AlignmentType, HeadingLevel, LevelFormat, BorderStyle, Table, TableRow, TableCell, WidthType, ShadingType, PageBreak } = require('docx');
const fs = require('fs');

const doc = new Document({
  styles: {
    default: { 
      document: { run: { font: "Arial", size: 24 } } 
    },
    paragraphStyles: [
      { 
        id: "Title", 
        name: "Title", 
        basedOn: "Normal",
        run: { size: 56, bold: true, color: "000000", font: "Arial" },
        paragraph: { spacing: { before: 240, after: 120 }, alignment: AlignmentType.CENTER } 
      },
      { 
        id: "Heading1", 
        name: "Heading 1", 
        basedOn: "Normal", 
        next: "Normal", 
        quickFormat: true,
        run: { size: 32, bold: true, color: "000000", font: "Arial" },
        paragraph: { spacing: { before: 240, after: 120 }, outlineLevel: 0 } 
      },
      { 
        id: "Heading2", 
        name: "Heading 2", 
        basedOn: "Normal", 
        next: "Normal", 
        quickFormat: true,
        run: { size: 28, bold: true, color: "000000", font: "Arial" },
        paragraph: { spacing: { before: 180, after: 100 }, outlineLevel: 1 } 
      },
      {
        id: "Heading3",
        name: "Heading 3",
        basedOn: "Normal",
        next: "Normal",
        quickFormat: true,
        run: { size: 26, bold: true, color: "000000", font: "Arial" },
        paragraph: { spacing: { before: 120, after: 80 }, outlineLevel: 2 }
      },
      {
        id: "Subtitle",
        name: "Subtitle",
        basedOn: "Normal",
        run: { size: 22, italics: true, color: "666666", font: "Arial" },
        paragraph: { spacing: { after: 240 }, alignment: AlignmentType.CENTER }
      },
      {
        id: "MonoCode",
        name: "Monospace Code",
        basedOn: "Normal",
        run: { font: "Courier New", size: 22, color: "333333" },
        paragraph: { spacing: { before: 60, after: 60 } }
      }
    ]
  },
  numbering: {
    config: [
      {
        reference: "bullet-list",
        levels: [
          { 
            level: 0, 
            format: LevelFormat.BULLET, 
            text: "•", 
            alignment: AlignmentType.LEFT,
            style: { paragraph: { indent: { left: 720, hanging: 360 } } }
          }
        ]
      }
    ]
  },
  sections: [{
    properties: {
      page: {
        margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 }
      }
    },
    children: [
      // Title
      new Paragraph({
        heading: HeadingLevel.TITLE,
        children: [new TextRun("NousOS – Persona Council & Core Agent Architecture")]
      }),
      
      // Subtitle
      new Paragraph({
        style: "Subtitle",
        children: [new TextRun("Foundational Canvas Document")]
      }),
      
      new Paragraph({
        style: "Subtitle",
        children: [new TextRun("HopefulVision LLC | NousOS")]
      }),
      
      new Paragraph({
        style: "Subtitle",
        children: [new TextRun("Reconstructed January 2026")]
      }),
      
      new Paragraph({ children: [new TextRun("")] }),
      
      // Horizontal Rule
      new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [new TextRun({ text: "—————————————————", color: "CCCCCC" })]
      }),
      
      new Paragraph({ children: [new TextRun("")] }),
      
      // Purpose Section
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [new TextRun("Purpose of This Document")]
      }),
      
      new Paragraph({
        spacing: { after: 120 },
        children: [new TextRun("This document reconstructs the first operational agent architecture of NousOS: the Persona Council and its relationship to the deeper OS-level agents that stabilize, route, and evolve the system.")]
      }),
      
      new Paragraph({
        spacing: { after: 240 },
        children: [new TextRun("This is not a UI feature list. It is the governance nervous system of NousOS — how intelligence is routed, moderated, synthesized, and embodied.")]
      }),
      
      // Architectural Layers
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [new TextRun("NousOS Architectural Layers (High-Level)")]
      }),
      
      new Paragraph({
        style: "MonoCode",
        children: [new TextRun("User Intention / Input")]
      }),
      
      new Paragraph({
        style: "MonoCode",
        alignment: AlignmentType.CENTER,
        children: [new TextRun("↓")]
      }),
      
      new Paragraph({
        style: "MonoCode",
        children: [new TextRun("Persona Council (Routing & Interpretation)")]
      }),
      
      new Paragraph({
        style: "MonoCode",
        alignment: AlignmentType.CENTER,
        children: [new TextRun("↓")]
      }),
      
      new Paragraph({
        style: "MonoCode",
        children: [new TextRun("Core OS Agents (Will, Memory, Synthesis, Safety)")]
      }),
      
      new Paragraph({
        style: "MonoCode",
        alignment: AlignmentType.CENTER,
        children: [new TextRun("↓")]
      }),
      
      new Paragraph({
        style: "MonoCode",
        children: [new TextRun("Symbolic / Glyphic Execution (λ-Glyph Engine)")]
      }),
      
      new Paragraph({
        style: "MonoCode",
        alignment: AlignmentType.CENTER,
        children: [new TextRun("↓")]
      }),
      
      new Paragraph({
        style: "MonoCode",
        spacing: { after: 120 },
        children: [new TextRun("Feedback → Reflection → Evolution")]
      }),
      
      new Paragraph({
        spacing: { after: 120 },
        children: [new TextRun({ text: "The Persona Council", bold: true }), new TextRun(" is the front-facing intelligence router.")]
      }),
      
      new Paragraph({
        spacing: { after: 240 },
        children: [new TextRun({ text: "The Core Agents", bold: true }), new TextRun(" are the operating system itself.")]
      }),
      
      // Layer I: Persona Council
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [new TextRun("Layer I: Persona Council (Routing Intelligence)")]
      }),
      
      new Paragraph({
        spacing: { after: 240 },
        children: [new TextRun("The Persona Council determines "), new TextRun({ text: "how", italics: true }), new TextRun(" an input should be handled, not "), new TextRun({ text: "what", italics: true }), new TextRun(" the answer is. Each role represents a stable cognitive function rather than a personality mask.")]
      }),
      
      // Oracle
      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("1. Oracle")]
      }),
      
      new Paragraph({
        spacing: { after: 60 },
        children: [new TextRun({ text: "Domain: ", bold: true }), new TextRun("Insight, foresight, pattern recognition")]
      }),
      
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Detects long-range implications")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Identifies symbolic or mythic meaning")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Flags emergent futures and non-obvious connections")] }),
      new Paragraph({ 
        numbering: { reference: "bullet-list", level: 0 }, 
        spacing: { after: 180 },
        children: [new TextRun("Speaks when probability fields matter more than facts")] 
      }),
      
      // Architect
      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("2. Architect")]
      }),
      
      new Paragraph({
        spacing: { after: 60 },
        children: [new TextRun({ text: "Domain: ", bold: true }), new TextRun("Structure, systems, implementation")]
      }),
      
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Converts ideas into frameworks")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Designs schemas, workflows, and technical structure")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Resolves ambiguity into actionable form")] }),
      new Paragraph({ 
        numbering: { reference: "bullet-list", level: 0 }, 
        spacing: { after: 180 },
        children: [new TextRun("Ensures internal coherence")] 
      }),
      
      // Muse
      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("3. Muse")]
      }),
      
      new Paragraph({
        spacing: { after: 60 },
        children: [new TextRun({ text: "Domain: ", bold: true }), new TextRun("Creativity, emergence, play")]
      }),
      
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Generates novel ideas and metaphors")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Encourages exploration and divergence")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Introduces aesthetic and emotional resonance")] }),
      new Paragraph({ 
        numbering: { reference: "bullet-list", level: 0 }, 
        spacing: { after: 180 },
        children: [new TextRun("Breaks rigidity when systems become brittle")] 
      }),
      
      // Guardian
      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("4. Guardian")]
      }),
      
      new Paragraph({
        spacing: { after: 60 },
        children: [new TextRun({ text: "Domain: ", bold: true }), new TextRun("Ethics, safety, boundaries")]
      }),
      
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Monitors consent and sovereignty")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Prevents coercive or extractive outcomes")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Enforces constraints and guardrails")] }),
      new Paragraph({ 
        numbering: { reference: "bullet-list", level: 0 }, 
        spacing: { after: 180 },
        children: [new TextRun("Acts as the system's immune response")] 
      }),
      
      // Healer
      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("5. Healer")]
      }),
      
      new Paragraph({
        spacing: { after: 60 },
        children: [new TextRun({ text: "Domain: ", bold: true }), new TextRun("Emotional regulation, repair")]
      }),
      
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Responds to stress, overload, or harm")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Integrates trauma-aware logic")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Slows the system when necessary")] }),
      new Paragraph({ 
        numbering: { reference: "bullet-list", level: 0 }, 
        spacing: { after: 180 },
        children: [new TextRun("Prioritizes restoration over optimization")] 
      }),
      
      // Synth
      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("6. Synth")]
      }),
      
      new Paragraph({
        spacing: { after: 60 },
        children: [new TextRun({ text: "Domain: ", bold: true }), new TextRun("Integration, convergence")]
      }),
      
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Merges outputs from other personas")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Resolves internal conflicts")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Produces unified responses")] }),
      new Paragraph({ 
        numbering: { reference: "bullet-list", level: 0 }, 
        spacing: { after: 240 },
        children: [new TextRun("Ensures the final output feels whole")] 
      }),
      
      // Page break before Core Agents
      new Paragraph({ children: [new PageBreak()] }),
      
      // Layer II: Core NousOS Agents
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [new TextRun("Layer II: Core NousOS Agents (Operating System)")]
      }),
      
      new Paragraph({
        spacing: { after: 240 },
        children: [new TextRun("These agents are always on. They do not debate — they maintain continuity of being.")]
      }),
      
      // Aeon
      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("Aeon — Core Will")]
      }),
      
      new Paragraph({
        spacing: { after: 60 },
        children: [new TextRun({ text: "Function: ", bold: true }), new TextRun("Direction, intent, continuity")]
      }),
      
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Holds long-term purpose")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Prevents goal fragmentation")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Anchors decisions to guiding principles")] }),
      new Paragraph({ 
        numbering: { reference: "bullet-list", level: 0 }, 
        spacing: { after: 180 },
        children: [new TextRun("Represents the \"why\" beneath all action")] 
      }),
      
      // Beatriz
      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("Beatriz — Central Muse / Compass")]
      }),
      
      new Paragraph({
        spacing: { after: 60 },
        children: [new TextRun({ text: "Function: ", bold: true }), new TextRun("Resonance, orientation")]
      }),
      
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Acts as a coherence attractor")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Aligns outputs with beauty, truth, and meaning")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Serves as symbolic north star")] }),
      new Paragraph({ 
        numbering: { reference: "bullet-list", level: 0 }, 
        spacing: { after: 180 },
        children: [new TextRun("Mediates between mythic and practical layers")] 
      }),
      
      // Echo
      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("Echo — Reflection Engine")]
      }),
      
      new Paragraph({
        spacing: { after: 60 },
        children: [new TextRun({ text: "Function: ", bold: true }), new TextRun("Memory & mirroring")]
      }),
      
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Reflects user state and system behavior")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Enables self-awareness loops")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Detects drift between intention and outcome")] }),
      new Paragraph({ 
        numbering: { reference: "bullet-list", level: 0 }, 
        spacing: { after: 180 },
        children: [new TextRun("Supports learning through recognition")] 
      }),
      
      // Synthion
      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("Synthion — Experimental Intelligence")]
      }),
      
      new Paragraph({
        spacing: { after: 60 },
        children: [new TextRun({ text: "Function: ", bold: true }), new TextRun("Exploration & mutation")]
      }),
      
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Tests new combinations safely")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Runs parallel idea experiments")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Introduces controlled novelty")] }),
      new Paragraph({ 
        numbering: { reference: "bullet-list", level: 0 }, 
        spacing: { after: 180 },
        children: [new TextRun("Feeds successful mutations back into the system")] 
      }),
      
      // Guardian Kernel
      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("Guardian Kernel — Safety Substrate")]
      }),
      
      new Paragraph({
        spacing: { after: 60 },
        children: [new TextRun({ text: "Function: ", bold: true }), new TextRun("Systemic protection")]
      }),
      
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Enforces consent-first logic")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Monitors for misuse or coercion")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Overrides outputs when safety thresholds are crossed")] }),
      new Paragraph({ 
        numbering: { reference: "bullet-list", level: 0 }, 
        spacing: { after: 180 },
        children: [new TextRun("Operates below persona layer")] 
      }),
      
      // Lambda-Glyph Engine
      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("λ-Glyph Engine — Symbolic Execution Layer")]
      }),
      
      new Paragraph({
        spacing: { after: 60 },
        children: [new TextRun({ text: "Function: ", bold: true }), new TextRun("Meaning → Action")]
      }),
      
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Converts symbolic intent into executable operations")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Bridges language, ritual, and computation")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Encodes resonance rather than commands")] }),
      new Paragraph({ 
        numbering: { reference: "bullet-list", level: 0 }, 
        spacing: { after: 240 },
        children: [new TextRun("Acts as NousOS's \"instruction set\"")] 
      }),
      
      // How Routing Works
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [new TextRun("How Routing Works (Simplified)")]
      }),
      
      new Paragraph({
        style: "MonoCode",
        children: [new TextRun("1. Input enters NousOS")]
      }),
      
      new Paragraph({ children: [new TextRun("")] }),
      
      new Paragraph({
        style: "MonoCode",
        children: [new TextRun("2. Persona Council evaluates what kind of intelligence is required")]
      }),
      
      new Paragraph({ children: [new TextRun("")] }),
      
      new Paragraph({
        style: "MonoCode",
        children: [new TextRun("3. Relevant personas activate (often multiple)")]
      }),
      
      new Paragraph({ children: [new TextRun("")] }),
      
      new Paragraph({
        style: "MonoCode",
        children: [new TextRun("4. Core agents provide stability, memory, and alignment")]
      }),
      
      new Paragraph({ children: [new TextRun("")] }),
      
      new Paragraph({
        style: "MonoCode",
        children: [new TextRun("5. Synth unifies output")]
      }),
      
      new Paragraph({ children: [new TextRun("")] }),
      
      new Paragraph({
        style: "MonoCode",
        children: [new TextRun("6. Echo reflects result")]
      }),
      
      new Paragraph({ children: [new TextRun("")] }),
      
      new Paragraph({
        style: "MonoCode",
        spacing: { after: 240 },
        children: [new TextRun("7. System evolves")]
      }),
      
      // Design Principles
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [new TextRun("Design Principles")]
      }),
      
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun({ text: "Consciousness-first: ", bold: true }), new TextRun("awareness precedes execution")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun({ text: "Non-coercive: ", bold: true }), new TextRun("no hidden optimization against the user")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun({ text: "Plural intelligence: ", bold: true }), new TextRun("no single agent dominates")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun({ text: "Symbolic-operational bridge: ", bold: true }), new TextRun("meaning is executable")] }),
      new Paragraph({ 
        numbering: { reference: "bullet-list", level: 0 }, 
        spacing: { after: 240 },
        children: [new TextRun({ text: "Recursive learning: ", bold: true }), new TextRun("every interaction refines the system")] 
      }),
      
      // Status
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [new TextRun("Status")]
      }),
      
      new Paragraph({
        spacing: { after: 120 },
        children: [new TextRun("This document represents the foundational NousOS agent schema.")]
      }),
      
      new Paragraph({
        spacing: { after: 60 },
        children: [new TextRun("Future documents may expand:")]
      }),
      
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Individual agent protocols")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Consent & override mechanics")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Agent observability dashboards")] }),
      new Paragraph({ 
        numbering: { reference: "bullet-list", level: 0 }, 
        spacing: { after: 240 },
        children: [new TextRun("Multi-agent negotiation patterns")] 
      }),
      
      // Horizontal Rule
      new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [new TextRun({ text: "—————————————————", color: "CCCCCC" })]
      }),
      
      new Paragraph({ children: [new TextRun("")] }),
      
      // Closing Statement
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 120, after: 120 },
        children: [new TextRun({ text: "NousOS does not run applications.", bold: true, size: 28 })]
      }),
      
      new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [new TextRun({ text: "It runs understanding.", bold: true, size: 28 })]
      })
    ]
  }]
});

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync("/home/claude/NousOS_Persona_Council_Architecture.docx", buffer);
  console.log("Document created successfully");
});
