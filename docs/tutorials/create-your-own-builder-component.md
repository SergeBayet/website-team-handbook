# Create Your Own Builder Component: BuilderPasswordInput

Welcome to the laughably practical guide to crafting a brand-new Builder component. Today we are birthing the mighty `BuilderPasswordInput`, a component so secure it makes padlocks blush and hackers sigh dramatically. Grab your beverage of choice and let's roll through the steps like a password rolling through complexity checks.

## Step 0 – Set the Stage (a.k.a. Gathering Props)
Before you unleash your new component, make sure your module is set up to register Builder components. If you're starting from scratch, double-check that:

- Your module has a `static/src/builder/components` directory ready for action.
- The Builder manifest knows about your component (usually via `assets["web.assets_backend"]`).
- You can refresh the Website Builder without it pulling a diva move.

With that foundation secured, it’s time to design the component with a flourish worthy of a superhero origin story.

## Step 1 – Sketch the Component Contract
We’ll begin by defining the props our component will accept. Keep it friendly and explicit—like a flight attendant telling you how to use the oxygen mask.

```javascript
/**
 * @typedef {Object} BuilderPasswordInputProps
 * @property {string} name - Unique field identifier.
 * @property {string} [label] - Friendly label for the input field.
 * @property {string} [value] - Current password value.
 * @property {(value: string) => boolean} [validatePassword]
 *   Optional predicate used to validate password strength. Defaults to
 *   the mighty "at least one digit, one special character, and one uppercase" combo.
 */
```

This contract ensures anyone using your component knows exactly how to chat with it. No awkward small talk.

## Step 2 – Build the Widget Skeleton
Time to code the basic Owl component—no fancy feathers yet. Drop the following file into `static/src/builder/components/builder_password_input/builder_password_input.js`:

```javascript
/** @odoo-module */
import { Component, useState } from "@odoo/owl";

const defaultValidatePassword = (value = "") =>
  /^(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).+$/u.test(value);

export class BuilderPasswordInput extends Component {
  static props = {
    name: String,
    label: { type: String, optional: true },
    value: { type: String, optional: true },
    validatePassword: { type: Function, optional: true },
  };

  setup() {
    const state = useState({
      value: this.props.value || "",
      showPassword: false,
      isValid: true,
    });

    const getValidator = () => this.props.validatePassword || defaultValidatePassword;

    const updateValue = (newValue) => {
      state.value = newValue;
      state.isValid = getValidator()(newValue);
      this.trigger("update", { [this.props.name]: newValue });
    };

    return {
      state,
      toggleVisibility: () => (state.showPassword = !state.showPassword),
      onInput: (event) => updateValue(event.target.value),
      getValidationState: () => state.isValid,
    };
  }
}
```

At this point you have a functioning password input—minimalist but proud. Reload the Builder to make sure the component doesn’t explode into a million console errors. If it does, take a deep breath and check the import paths.

## Step 3 – Give It a Stylish Template
No one likes a faceless password box. Let’s give it a template at `static/src/builder/components/builder_password_input/builder_password_input.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<t t-name="website.BuilderPasswordInput">
  <div class="o_builder_password_input">
    <label t-if="props.label" t-att-for="props.name" class="o_builder_password_input_label">
      <t t-esc="props.label"/>
    </label>
    <div class="o_builder_password_input_field">
      <input
        t-att-name="props.name"
        t-att-type="state.showPassword ? 'text' : 'password'"
        t-model="state.value"
        class="o_input"
        t-on-input="onInput"
        aria-describedby="${props.name}-strength"
      />
      <button
        class="o_builder_password_toggle btn btn-light"
        type="button"
        t-on-click="toggleVisibility"
        t-att-aria-pressed="state.showPassword"
      >
        <t t-esc="state.showPassword ? '🙈 Hide' : '👀 Show'"/>
      </button>
    </div>
    <div
      t-att-id="`${props.name}-strength`"
      class="o_builder_password_strength"
      t-att-data-strength="getValidationState() ? 'ok' : 'ko'"
    />
  </div>
</t>
```

Congratulations, your component now politely toggles visibility and waves a strength meter div around. It’s practically begging for CSS.

## Step 4 – Spruce Up the Styles (A.K.A. Password Glam Makeover)
Drop the following CSS into `static/src/builder/components/builder_password_input/builder_password_input.scss` and add it to your `web.assets_backend` bundle:

```scss
.o_builder_password_input {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  &_label {
    font-weight: 600;
  }

  &_field {
    position: relative;
    display: flex;
    align-items: center;

    .o_input {
      flex: 1 1 auto;
      padding-right: 3rem;
    }

    .o_builder_password_toggle {
      position: absolute;
      right: 0.25rem;
      top: 50%;
      transform: translateY(-50%);
      font-size: 0.875rem;
    }
  }

  &_strength {
    height: 2px;
    background: linear-gradient(90deg, #ec4f4f, #f6e05e, #48bb78);
    opacity: 0.4;

    &[data-strength="ok"] {
      opacity: 1;
    }

    &[data-strength="ko"] {
      animation: wiggle 0.3s linear 2;
    }
  }
}

@keyframes wiggle {
  0% { transform: translateX(0); }
  25% { transform: translateX(-2px); }
  50% { transform: translateX(2px); }
  75% { transform: translateX(-2px); }
  100% { transform: translateX(0); }
}
```

This gives you a glamorous strength bar: faded when uncertain, bold when confident, and slightly wiggly when unhappy—just like every developer’s self-esteem during code review.

## Step 5 – Compute the Strength Line Color
A single thin line tells the whole password story. We’ll shade it red, yellow, or green based on the validation results and basic entropy measurements.

Enhance the component logic:

```javascript
import { Component, useState } from "@odoo/owl";

const defaultValidatePassword = (value = "") =>
  /^(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).+$/u.test(value);

const getStrengthColor = (value, isValid) => {
  if (!value) {
    return "red";
  }
  if (!isValid) {
    return "red";
  }
  if (value.length < 8) {
    return "yellow";
  }
  return "green";
};

export class BuilderPasswordInput extends Component {
  // ...previous props definition...
  setup() {
    const state = useState({
      value: this.props.value || "",
      showPassword: false,
      isValid: true,
      strengthColor: "red",
    });

    const getValidator = () => this.props.validatePassword || defaultValidatePassword;

    const updateValue = (newValue) => {
      const validator = getValidator();
      state.value = newValue;
      state.isValid = validator(newValue);
      state.strengthColor = getStrengthColor(newValue, state.isValid);
      this.trigger("update", { [this.props.name]: newValue });
    };

    updateValue(state.value);

    return {
      state,
      toggleVisibility: () => (state.showPassword = !state.showPassword),
      onInput: (event) => updateValue(event.target.value),
    };
  }
}
```

Then tweak the template to reflect the color mood swings:

```xml
<div
  t-att-id="`${props.name}-strength`"
  class="o_builder_password_strength"
  t-att-style="`--strength-color: ${state.strengthColor}`"
  t-att-data-strength="state.isValid ? 'ok' : 'ko'"
/>
```

And adjust the SCSS to use the custom property:

```scss
&_strength {
  height: 2px;
  background: var(--strength-color, #ec4f4f);
  transition: background 150ms ease-in-out;
  // ...rest unchanged
}
```

Voilà—your strength line is now a thin mood ring for passwords.

## Step 6 – Register the Component in the Builder
All this effort deserves a spot in the Builder’s component panel. Update your component registry, typically `static/src/builder/editor/snippets.xml`, with something like:

```xml
<t t-name="website.snippets" inherit_id="website.snippets" priority="20">
  <xpath expr="//div[@id='o_snippets_content']" position="inside">
    <t t-call="website.snippet_option" name="builder_password_input">
      <t t-set="name">Password Input</t>
      <t t-set="widget">website.BuilderPasswordInput</t>
      <t t-set="icon">fa fa-key</t>
    </t>
  </xpath>
</t>
```

Give the Builder a refresh and drag your shiny new component onto a page. Bask in the glow of the strength bar turning green like the Hulk after yoga.

## Step 7 – Let Users Customize the Validation (Optional but Fancy)
Because every project has that one stakeholder who wants *their* password rules, your component accepts a `validatePassword` prop. You can expose this via snippet options or context logic, for example:

```javascript
const veryStrictValidation = (value) =>
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^\w\s])(?=.{12,}).+$/u.test(value);

// When instantiating the component
<Component
  name="customer_password"
  label="Customer Password"
  validatePassword={veryStrictValidation}
/>
```

When provided, the component will use that predicate and still color the strength line appropriately. It’s like giving the component a new set of gym rules.

## Step 8 – Celebrate and Document
Finally, add a note in your module’s README or technical specs explaining how to use `BuilderPasswordInput`. Future-you (and teammates) will thank you—probably with cookies.

Congratulations! You now have a Builder component that:

- Accepts text input like a pro.
- Toggles password visibility with just the right amount of sass.
- Validates using a customizable predicate that defaults to the classic strong password recipe.
- Shows a thin strength line that flips between red, yellow, and green faster than a traffic light on espresso.

Now go forth and secure those passwords like the charming code wizard you are. 🧙‍♀️🔐
