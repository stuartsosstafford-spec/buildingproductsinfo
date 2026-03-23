---
title: "How to Choose a Consumer Unit"
category: "Electrical & Lighting"
author: "Editorial Team"
publishDate: 2026-03-09
metaTitle: "How to Choose a Consumer Unit — Buying Guide for Electricians"
metaDescription: "Metal enclosures, RCBO boards, Type A devices and main switch sizing — how to specify a UK domestic consumer unit correctly under current Building Regulations."
draft: false
faq:
  - question: "Do I need a metal consumer unit?"
    answer: "Since January 2016, Amendment 3 to BS 7671 (17th Edition) requires consumer units in domestic premises to have a non-combustible enclosure — in practice, this means metal (steel) consumer units. Plastic units are no longer compliant for new domestic installations."
  - question: "What is the difference between an RCBO and an RCD?"
    answer: "An RCD (Residual Current Device) protects a group of circuits. If one circuit trips the RCD, all circuits on that RCD lose power. An RCBO (Residual Current Breaker with Overload) provides both overcurrent and RCD protection on each individual circuit, so a fault on one circuit only trips that circuit."
  - question: "How many ways do I need in a consumer unit?"
    answer: "Add up the number of circuits you need, then add 20–25% spare capacity for future additions. A typical modern 3-bed house needs 10–14 ways (ring mains, lighting circuits, cooker, shower, EV charger, garage, outdoor sockets). Always specify more ways than you currently need."
  - question: "What is a Type A vs Type B RCD/RCBO?"
    answer: "Type A devices detect both sinusoidal AC and pulsating DC residual currents — required where equipment with electronic components (inverters, EV chargers, solar, heat pumps) is connected. Type B detects all waveforms including smooth DC. Always use Type A or B where modern electronic loads are connected."
relatedProducts:
  - hager-vml106-consumer-unit
  - chint-rcbo-type-a-b16
  - wylex-nhxs1b20-rcbo-type-b-20a
  - schneider-easy9-mcb-type-b-6a
  - martindale-ez150-socket-tester
---

## Choosing a Consumer Unit for UK Domestic Installations

Consumer unit specification has become more complex as households take on more electronic loads — EV chargers, heat pumps, solar inverters, battery storage. Getting the board right from the outset avoids expensive modifications later. This guide covers the key decisions for electricians and contractors specifying or replacing a consumer unit.

## Metal Enclosures: Now a Requirement

Since January 2016, Amendment 3 to BS 7671 (17th Edition) has required all consumer units in domestic premises to have a **non-combustible enclosure**. Fires starting in or spreading from plastic consumer units prompted this change following incident investigations.

In practice, this means **steel** (powder-coated) enclosures are required for all new domestic consumer unit installations. This applies to new boards, replacement boards, and any significant modification that requires a new unit. Plastic consumer units remain available but are only appropriate for non-domestic applications (workshops, garages used commercially, etc.) — check with your NAPIT or NICEIC scheme before using plastic in any domestic context.

## Protection Types: RCD, Dual RCD, and RCBO Boards

The arrangement of protection devices is the most important design decision when specifying a consumer unit.

### Dual RCD (Split Load) Boards

A split load board has a main switch and two RCDs, each protecting half the circuits. This is the most common type in older installations and remains widely used for cost-sensitive projects.

**Advantage:** Lower cost than a fully RCBO board.

**Disadvantage:** If one circuit develops a fault and trips its RCD, all circuits on that RCD lose power — up to half the property can go dark from a single nuisance trip. For households with medical equipment, alarm systems, or refrigeration, this is a significant drawback.

### Fully RCBO Boards

Each circuit has its own **RCBO** (Residual Current Breaker with Overload), which combines RCD and MCB protection in a single device. A fault on one circuit trips only that circuit's RCBO.

**Advantage:** Maximum circuit discrimination — a fault on the kitchen ring main does not affect lighting or the freezer.

**Disadvantage:** Higher initial cost. However, the cost premium over a dual RCD board has reduced as RCBO prices have come down.

**Fully RCBO boards are now the recommended specification for most domestic installations.** The [Hager VML106 consumer unit](/electrical-lighting/hager-vml106-consumer-unit/) is a well-regarded metal enclosure board designed for RCBO-only configurations.

### High Integrity Boards

A high integrity (or split load with RCBOs on critical circuits) board combines both approaches — typically RCBOs on essential circuits and shared RCD protection on non-critical circuits. Less common with the falling cost of full RCBO boards.

## How Many Ways?

Specify **more ways than you currently need**. Upgrading a consumer unit to accommodate additional circuits later requires the board to be isolated, the work to be certified, and the meter tails to be disconnected — a job that typically involves the DNO. The cost of fitting a larger board from the outset is small compared to the cost of replacing it later.

A typical 3-bedroom house in 2026 requires:
- 2 ring main circuits (upstairs and downstairs)
- 2–3 lighting circuits
- Cooker circuit (45A)
- Shower circuit (40–50A depending on rating)
- EV charger (32A — now common even if not currently installed)
- Garage or outdoor circuit
- Spare ways for future circuits

That totals 10–13 ways before spares. A 16-way board is a sensible minimum for most new builds and full rewires. 18-way and 20-way boards are appropriate for larger properties.

## Type A vs Type B Protection

This is a common area of confusion and increasingly important as households add electronic equipment.

**Type AC** devices detect sinusoidal alternating residual current. This was historically standard but is no longer appropriate as the only protection type in most modern installations.

**Type A** devices detect sinusoidal AC and pulsating DC residual currents. Type A is required — and specifically called out in BS 7671 — for circuits serving equipment with electronic components, including washing machines, dishwashers, EV chargers, heat pumps, and solar inverters. This is now the minimum standard for most circuits.

**Type B** devices detect all residual current waveforms, including smooth DC — required for 3-phase EV chargers and certain solar and battery inverter installations.

Use Type A RCBOs as the default for modern domestic installations. The [Chint RCBO Type A B16](/electrical-lighting/chint-rcbo-type-a-b16/) and [Wylex NHXS1B20 RCBO Type B 20A](/electrical-lighting/wylex-nhxs1b20-rcbo-type-b-20a/) cover the most common requirements.

## Main Switch Rating

The main isolator rating must equal or exceed the prospective load. **100A** is the standard for most properties with a 100A supply fuse. **80A** may be appropriate for smaller properties or where a 60A DNO fuse is in place — confirm the DNO fuse rating before specifying.

Where an EV charger with load management is installed, or where solar export and battery storage are present, consider whether the main switch rating and the incoming meter tails are rated correctly for future demand.

## Key Brands

Quality consumer units for domestic installation come from a relatively small number of reliable manufacturers:

- **Hager** — well-regarded build quality, good RCBO availability across Type A and B
- **Schneider Electric (Acti9)** — widely used by contractors, broad product range
- **Wylex** — long-established UK brand, popular for split load and RCBO boards
- **Chint** — competitive pricing, acceptable quality for RCBOs and MCBs
- **Legrand** — premium product, used in higher-specification installations

## Regulatory Note

Consumer unit installation and replacement in domestic properties is **notifiable work under Part P** of the Building Regulations. The work must be carried out by a competent person registered with an approved scheme (NICEIC, NAPIT, etc.) or notified to the local authority building control. Issue an Electrical Installation Certificate on completion. As part of the pre-inspection verification, a [Martindale EZ150 socket tester](/electrical-lighting/martindale-ez150-socket-tester/) provides a fast check of polarity, earth continuity, and correct wiring on all socket outlets.
