import { InputEmits, InputProps } from "@/types";
import { computed } from "vue";

export function inputHelpers<T>(props: InputProps<T>, emit: InputEmits<T>) {
    function updateValue(value: T) {
        emit("update:modelValue", value);
    }

    function onInput(event: any) {
        updateValue(event.target.value);
    }

    function onFocus() {
        if (props.validation) {
            props.validation.valid = null;
        }
    }

    const isValid = computed(() => {
        if (props.validation) {
            if (props.validation.valid != null) {
                return props.validation.valid;
            }
            return true;
        }
        return true;
    })

    const error = computed(() => {
        if (props.validation) {
            return props.validation.error;
        }
        return null;
    })

    return {
        updateValue,
        onInput,
        onFocus,
        isValid,
        error
    };
}
