function Error({ message, onRetry }: { message: string; onRetry: () => void }) {
  return (
    <div className="flex items-center justify-center">
      <div className="p-8 text-center">
        <p className="mb-4 text-xl font-semibold text-red-600">{message}</p>
        <button
          onClick={onRetry}
          className="rounded bg-red-500 px-4 py-2 text-white transition duration-300 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
        >
          재시도
        </button>
      </div>
    </div>
  );
}

export default Error;
