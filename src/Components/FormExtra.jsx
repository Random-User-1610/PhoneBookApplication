export default function FormExtra() {
  return (
    <div className="flex items-center justify-between mx-6">
      <div className="flex items-center">
        <input
          id="remember-me"
          name="remember-me"
          type="checkbox"
          className="h-4 w-4 text-black focus:ring-black border-gray-300 rounded"
        />
        <label
          htmlFor="remember-me"
          className="ml-2 block text-sm text-gray-900"
        >
          Remember me
        </label>
      </div>

      <div className="text-sm">
        <a href="#" className="font-medium text-black-600 hover:text-gray-400">
          Forgot your password?
        </a>
      </div>
    </div>
  );
}
