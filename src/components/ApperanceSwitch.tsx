import { useDark } from '@/hooks'

function ApperanceSwitch() {
  const { isDark, toggleDark } = useDark()
  return (
    <button icon-btn onClick={toggleDark}>
      <div
        className={
          isDark ? 'i-mdi-moon-waxing-crescent' : 'i-mdi-white-balance-sunny'
        }></div>
    </button>
  )
}

export default ApperanceSwitch
