const signals = Object.freeze({
  /** Sent to indicate when a controlling terminal is closed or a parent process exits. */
  SIGHUP: 'SIGHUP',

  /** Sent to indicate when a user wishes to interrupt a process (`Ctrl`+`C`). */
  SIGINT: 'SIGINT',

  /** Sent to indicate when a user wishes to terminate a process and perform a core dump. */
  SIGQUIT: 'SIGQUIT',

  /** Sent to a process to notify that it has attempted to perform an illegal, malformed, unknown, or privileged instruction. */
  SIGILL: 'SIGILL',

  /** Sent to a process when an exception has occurred. */
  SIGTRAP: 'SIGTRAP',

  /** Sent to a process to request that it abort. */
  SIGABRT: 'SIGABRT',

  /** Synonym for `SIGABRT` */
  SIGIOT: 'SIGIOT',

  /** Sent to a process to notify that it has caused a bus error. */
  SIGBUS: 'SIGBUS',

  /** Sent to a process to notify that it has performed an illegal arithmetic operation. */
  SIGFPE: 'SIGFPE',

  /** Sent to a process to terminate it immediately. */
  SIGKILL: 'SIGKILL',

  /** Sent to a process to identify user-defined conditions. */
  SIGUSR1: 'SIGUSR1',

  /** Sent to a process to identify user-defined conditions.*/
  SIGUSR2: 'SIGUSR2',

  /** Sent to a process to notify of a segmentation fault. */
  SIGSEGV: 'SIGSEGV',

  /** Sent to a process when it has attempted to write to a disconnected pipe. */
  SIGPIPE: 'SIGPIPE',

  /** Sent to a process when a system timer elapses. */
  SIGALRM: 'SIGALRM',

  /** Sent to a process to request termination. */
  SIGTERM: 'SIGTERM',

  /** Sent to a process when a child process terminates. */
  SIGCHLD: 'SIGCHLD',

  /** Sent to a process to indicate a stack fault on a coprocessor. */
  SIGSTKFLT: 'SIGSTKFLT',

  /** Sent to instruct the operating system to continue a paused process. */
  SIGCONT: 'SIGCONT',

  /** Sent to instruct the operating system to halt a process. */
  SIGSTOP: 'SIGSTOP',

  /** Sent to a process to request it to stop. */
  SIGTSTP: 'SIGTSTP',

  /** Sent to indicate when a user wishes to interrupt a process. */
  SIGBREAK: 'SIGBREAK',

  /** Sent to a process when it reads from the TTY while in the background. */
  SIGTTIN: 'SIGTTIN',

  /** Sent to a process when it writes to the TTY while in the background. */
  SIGTTOU: 'SIGTTOU',

  /** Sent to a process when a socket has urgent data to read. */
  SIGURG: 'SIGURG',

  /** Sent to a process when it has exceeded its limit on CPU usage. */
  SIGXCPU: 'SIGXCPU',

  /** Sent to a process when it grows a file larger than the maximum allowed. */
  SIGXFSZ: 'SIGXFSZ',

  /** Sent to a process when a virtual timer has elapsed. */
  SIGVTALRM: 'SIGVTALRM',

  /** Sent to a process when a system timer has elapsed. */
  SIGPROF: 'SIGPROF',

  /** Sent to a process when the controlling terminal has changed its size. */
  SIGWINCH: 'SIGWINCH',

  /** Sent to a process when I/O is available. */
  SIGIO: 'SIGIO',

  /** Synonym for `SIGIO` */
  SIGPOLL: 'SIGPOLL',

  /** Sent to a process when a file lock has been lost. */
  SIGLOST: 'SIGLOST',

  /** Sent to a process to notify of a power failure. */
  SIGPWR: 'SIGPWR',

  /** Synonym for `SIGPWR` */
  SIGINFO: 'SIGINFO',

  /** Sent to a process to notify of a bad argument. */
  SIGSYS: 'SIGSYS',

  /** Synonym for `SIGSYS` */
  SIGUNUSED: 'SIGUNUSED',
});

const errno = Object.freeze({
  /** Indicates that the list of arguments is longer than expected. */
  E2BIG: 'E2BIG',

  /** Indicates that the operation did not have sufficient permissions. */
  EACCES: 'EACCES',

  /** Indicates that the network address is already in use. */
  EADDRINUSE: 'EADDRINUSE',

  /** Indicates that the network address is currently unavailable for use. */
  EADDRNOTAVAIL: 'EADDRNOTAVAIL',

  /** Indicates that the network address family is not supported. */
  EAFNOSUPPORT: 'EAFNOSUPPORT',

  /** Indicates that there is no data available and to try the operation again later. */
  EAGAIN: 'EAGAIN',

  /** Indicates that the socket already has a pending connection in progress. */
  EALREADY: 'EALREADY',

  /** Indicates that a file descriptor is not valid. */
  EBADF: 'EBADF',

  /** Indicates an invalid data message. */
  EBADMSG: 'EBADMSG',

  /** Indicates that a device or resource is busy. */
  EBUSY: 'EBUSY',

  /** Indicates that an operation was canceled. */
  ECANCELED: 'ECANCELED',

  /** Indicates that there are no child processes. */
  ECHILD: 'ECHILD',

  /** Indicates that the network connection has been aborted. */
  ECONNABORTED: 'ECONNABORTED',

  /** Indicates that the network connection has been refused. */
  ECONNREFUSED: 'ECONNREFUSED',

  /** Indicates that the network connection has been reset. */
  ECONNRESET: 'ECONNRESET',

  /** Indicates that a resource deadlock has been avoided. */
  EDEADLK: 'EDEADLK',

  /** Indicates that a destination address is required. */
  EDESTADDRREQ: 'EDESTADDRREQ',

  /** Indicates that an argument is out of the domain of the function. */
  EDOM: 'EDOM',

  /** Indicates that the disk quota has been exceeded. */
  EDQUOT: 'EDQUOT',

  /** Indicates that the file already exists. */
  EEXIST: 'EEXIST',

  /** Indicates an invalid pointer address. */
  EFAULT: 'EFAULT',

  /** Indicates that the file is too large. */
  EFBIG: 'EFBIG',

  /** Indicates that the host is unreachable. */
  EHOSTUNREACH: 'EHOSTUNREACH',

  /** Indicates that the identifier has been removed. */
  EIDRM: 'EIDRM',

  /** Indicates an illegal byte sequence. */
  EILSEQ: 'EILSEQ',

  /** Indicates that an operation is already in progress. */
  EINPROGRESS: 'EINPROGRESS',

  /** Indicates that a function call was interrupted. */
  EINTR: 'EINTR',

  /** Indicates that an invalid argument was provided. */
  EINVAL: 'EINVAL',

  /** Indicates an otherwise unspecified I/O error. */
  EIO: 'EIO',

  /** Indicates that the socket is connected. */
  EISCONN: 'EISCONN',

  /** Indicates that the path is a directory. */
  EISDIR: 'EISDIR',

  /** Indicates too many levels of symbolic links in a path. */
  ELOOP: 'ELOOP',

  /** Indicates that there are too many open files. */
  EMFILE: 'EMFILE',

  /** Indicates that there are too many hard links to a file. */
  EMLINK: 'EMLINK',

  /** Indicates that the provided message is too long. */
  EMSGSIZE: 'EMSGSIZE',

  /** Indicates that a multihop was attempted. */
  EMULTIHOP: 'EMULTIHOP',

  /** Indicates that the filename is too long. */
  ENAMETOOLONG: 'ENAMETOOLONG',

  /** Indicates that the network is down. */
  ENETDOWN: 'ENETDOWN',

  /** Indicates that the connection has been aborted by the network. */
  ENETRESET: 'ENETRESET',

  /** Indicates that the network is unreachable. */
  ENETUNREACH: 'ENETUNREACH',

  /** Indicates too many open files in the system. */
  ENFILE: 'ENFILE',

  /** Indicates that no buffer space is available. */
  ENOBUFS: 'ENOBUFS',

  /** Indicates that no message is available on the stream head read queue. */
  ENODATA: 'ENODATA',

  /** Indicates that there is no such device. */
  ENODEV: 'ENODEV',

  /** Indicates that there is no such file or directory. */
  ENOENT: 'ENOENT',

  /** Indicates an exec format error. */
  ENOEXEC: 'ENOEXEC',

  /** Indicates that there are no locks available. */
  ENOLCK: 'ENOLCK',

  /** Indications that a link has been severed. */
  ENOLINK: 'ENOLINK',

  /** Indicates that there is not enough space. */
  ENOMEM: 'ENOMEM',

  /** Indicates that there is no message of the desired type. */
  ENOMSG: 'ENOMSG',

  /** Indicates that a given protocol is not available. */
  ENOPROTOOPT: 'ENOPROTOOPT',

  /** Indicates that there is no space available on the device. */
  ENOSPC: 'ENOSPC',

  /** Indicates that there are no stream resources available. */
  ENOSR: 'ENOSR',

  /** Indicates that a given resource is not a stream. */
  ENOSTR: 'ENOSTR',

  /** Indicates that a function has not been implemented. */
  ENOSYS: 'ENOSYS',

  /** Indicates that the socket is not connected. */
  ENOTCONN: 'ENOTCONN',

  /** Indicates that the path is not a directory. */
  ENOTDIR: 'ENOTDIR',

  /** Indicates that the directory is not empty. */
  ENOTEMPTY: 'ENOTEMPTY',

  /** Indicates that the given item is not a socket. */
  ENOTSOCK: 'ENOTSOCK',

  /** Indicates that a given operation is not supported. */
  ENOTSUP: 'ENOTSUP',

  /** Indicates an inappropriate I/O control operation. */
  ENOTTY: 'ENOTTY',

  /** Indicates no such device or address. */
  ENXIO: 'ENXIO',

  /** Indicates that an operation is not supported on the socket. Although `ENOTSUP` and `EOPNOTSUPP` have the same value on Linux, according to POSIX.1 these error values should be distinct. */
  EOPNOTSUPP: 'EOPNOTSUPP',

  /** Indicates that a value is too large to be stored in a given data type. */
  EOVERFLOW: 'EOVERFLOW',

  /** Indicates that the operation is not permitted. */
  EPERM: 'EPERM',

  /** Indicates a broken pipe. */
  EPIPE: 'EPIPE',

  /** Indicates a protocol error. */
  EPROTO: 'EPROTO',

  /** Indicates that a protocol is not supported. */
  EPROTONOSUPPORT: 'EPROTONOSUPPORT',

  /** Indicates the wrong type of protocol for a socket. */
  EPROTOTYPE: 'EPROTOTYPE',

  /** Indicates that the results are too large. */
  ERANGE: 'ERANGE',

  /** Indicates that the file system is read only. */
  EROFS: 'EROFS',

  /** Indicates an invalid seek operation. */
  ESPIPE: 'ESPIPE',

  /** Indicates that there is no such process. */
  ESRCH: 'ESRCH',

  /** Indicates that the file handle is stale. */
  ESTALE: 'ESTALE',

  /** Indicates an expired timer. */
  ETIME: 'ETIME',

  /** Indicates that the connection timed out. */
  ETIMEDOUT: 'ETIMEDOUT',

  /** Indicates that a text file is busy. */
  ETXTBSY: 'ETXTBSY',

  /** Indicates that the operation would block. */
  EWOULDBLOCK: 'EWOULDBLOCK',

  /** Indicates an improper link. */
  EXDEV: 'EXDEV',

  /** Indicates an interrupted function call. */
  WSAEINTR: 'WSAEINTR',

  /** Indicates an invalid file handle. */
  WSAEBADF: 'WSAEBADF',

  /** Indicates insufficient permissions to complete the operation. */
  WSAEACCES: 'WSAEACCES',

  /** Indicates an invalid pointer address. */
  WSAEFAULT: 'WSAEFAULT',

  /** Indicates that an invalid argument was passed. */
  WSAEINVAL: 'WSAEINVAL',

  /** Indicates that there are too many open files. */
  WSAEMFILE: 'WSAEMFILE',

  /** Indicates that a resource is temporarily unavailable. */
  WSAEWOULDBLOCK: 'WSAEWOULDBLOCK',

  /** Indicates that an operation is currently in progress. */
  WSAEINPROGRESS: 'WSAEINPROGRESS',

  /** Indicates that an operation is already in progress. */
  WSAEALREADY: 'WSAEALREADY',

  /** Indicates that the resource is not a socket. */
  WSAENOTSOCK: 'WSAENOTSOCK',

  /** Indicates that a destination address is required. */
  WSAEDESTADDRREQ: 'WSAEDESTADDRREQ',

  /** Indicates that the message size is too long. */
  WSAEMSGSIZE: 'WSAEMSGSIZE',

  /** Indicates the wrong protocol type for the socket. */
  WSAEPROTOTYPE: 'WSAEPROTOTYPE',

  /** Indicates a bad protocol option. */
  WSAENOPROTOOPT: 'WSAENOPROTOOPT',

  /** Indicates that the protocol is not supported. */
  WSAEPROTONOSUPPORT: 'WSAEPROTONOSUPPORT',

  /** Indicates that the socket type is not supported. */
  WSAESOCKTNOSUPPORT: 'WSAESOCKTNOSUPPORT',

  /** Indicates that the operation is not supported. */
  WSAEOPNOTSUPP: 'WSAEOPNOTSUPP',

  /** Indicates that the protocol family is not supported. */
  WSAEPFNOSUPPORT: 'WSAEPFNOSUPPORT',

  /** Indicates that the address family is not supported. */
  WSAEAFNOSUPPORT: 'WSAEAFNOSUPPORT',

  /** Indicates that the network address is already in use. */
  WSAEADDRINUSE: 'WSAEADDRINUSE',

  /** Indicates that the network address is not available. */
  WSAEADDRNOTAVAIL: 'WSAEADDRNOTAVAIL',

  /** Indicates that the network is down. */
  WSAENETDOWN: 'WSAENETDOWN',

  /** Indicates that the network is unreachable. */
  WSAENETUNREACH: 'WSAENETUNREACH',

  /** Indicates that the network connection has been reset. */
  WSAENETRESET: 'WSAENETRESET',

  /** Indicates that the connection has been aborted. */
  WSAECONNABORTED: 'WSAECONNABORTED',

  /** Indicates that the connection has been reset by the peer. */
  WSAECONNRESET: 'WSAECONNRESET',

  /** Indicates that there is no buffer space available. */
  WSAENOBUFS: 'WSAENOBUFS',

  /** Indicates that the socket is already connected. */
  WSAEISCONN: 'WSAEISCONN',

  /** Indicates that the socket is not connected. */
  WSAENOTCONN: 'WSAENOTCONN',

  /** Indicates that data cannot be sent after the socket has been shutdown. */
  WSAESHUTDOWN: 'WSAESHUTDOWN',

  /** Indicates that there are too many references. */
  WSAETOOMANYREFS: 'WSAETOOMANYREFS',

  /** Indicates that the connection has timed out. */
  WSAETIMEDOUT: 'WSAETIMEDOUT',

  /** Indicates that the connection has been refused. */
  WSAECONNREFUSED: 'WSAECONNREFUSED',

  /** Indicates that a name cannot be translated. */
  WSAELOOP: 'WSAELOOP',

  /** Indicates that a name was too long. */
  WSAENAMETOOLONG: 'WSAENAMETOOLONG',

  /** Indicates that a network host is down. */
  WSAEHOSTDOWN: 'WSAEHOSTDOWN',

  /** Indicates that there is no route to a network host. */
  WSAEHOSTUNREACH: 'WSAEHOSTUNREACH',

  /** Indicates that the directory is not empty. */
  WSAENOTEMPTY: 'WSAENOTEMPTY',

  /** Indicates that there are too many processes. */
  WSAEPROCLIM: 'WSAEPROCLIM',

  /** Indicates that the user quota has been exceeded. */
  WSAEUSERS: 'WSAEUSERS',

  /** Indicates that the disk quota has been exceeded. */
  WSAEDQUOT: 'WSAEDQUOT',

  /** Indicates a stale file handle reference. */
  WSAESTALE: 'WSAESTALE',

  /** Indicates that the item is remote. */
  WSAEREMOTE: 'WSAEREMOTE',

  /** Indicates that the network subsystem is not ready. */
  WSASYSNOTREADY: 'WSASYSNOTREADY',

  /** Indicates that the `winsock.dll` version is out of range. */
  WSAVERNOTSUPPORTED: 'WSAVERNOTSUPPORTED',

  /** Indicates that successful WSAStartup has not yet been performed. */
  WSANOTINITIALISED: 'WSANOTINITIALISED',

  /** Indicates that a graceful shutdown is in progress. */
  WSAEDISCON: 'WSAEDISCON',

  /** Indicates that there are no more results. */
  WSAENOMORE: 'WSAENOMORE',

  /** Indicates that an operation has been canceled. */
  WSAECANCELLED: 'WSAECANCELLED',

  /** Indicates that the procedure call table is invalid. */
  WSAEINVALIDPROCTABLE: 'WSAEINVALIDPROCTABLE',

  /** Indicates an invalid service provider. */
  WSAEINVALIDPROVIDER: 'WSAEINVALIDPROVIDER',

  /** Indicates that the service provider failed to initialized. */
  WSAEPROVIDERFAILEDINIT: 'WSAEPROVIDERFAILEDINIT',

  /** Indicates a system call failure. */
  WSASYSCALLFAILURE: 'WSASYSCALLFAILURE',

  /** Indicates that a service was not found. */
  WSASERVICE_NOT_FOUND: 'WSASERVICE_NOT_FOUND',

  /** Indicates that a class type was not found. */
  WSATYPE_NOT_FOUND: 'WSATYPE_NOT_FOUND',

  /** Indicates that there are no more results. */
  WSA_E_NO_MORE: 'WSA_E_NO_MORE',

  /** Indicates that the call was canceled. */
  WSA_E_CANCELLED: 'WSA_E_CANCELLED',

  /** Indicates that a database query was refused. */
  WSAEREFUSED: 'WSAEREFUSED',
});

const dlopen = Object.freeze({
  /** Perform lazy binding. Node.js sets this flag by default. */
  RTLD_LAZY: 'RTLD_LAZY',

  /** Resolve all undefined symbols in the library before dlopen(3) returns. */
  RTLD_NOW: 'RTLD_NOW',

  /** Symbols defined by the library will be made available for symbol resolution of subsequently loaded libraries. */
  RTLD_GLOBAL: 'RTLD_GLOBAL',

  /** The converse of `RTLD_GLOBAL`. This is the default behavior if neither flag is specified. */
  RTLD_LOCAL: 'RTLD_LOCAL',

  /** Make a self-contained library use its own symbols in preference to symbols from previously loaded libraries. */
  RTLD_DEEPBIND: 'RTLD_DEEPBIND',
});

const priority = Object.freeze({
  /** The lowest process scheduling priority. This corresponds to `IDLE_PRIORITY_CLASS` on Windows, and a nice value of `19` on all other platforms. */
  PRIORITY_LOW: 'PRIORITY_LOW',

  /** The process scheduling priority above `PRIORITY_LOW` and below `PRIORITY_NORMAL`. This corresponds to `BELOW_NORMAL_PRIORITY_CLASS` on Windows, and a nice value of `10` on all other platforms. */
  PRIORITY_BELOW_NORMAL: 'PRIORITY_BELOW_NORMAL',

  /** The default process scheduling priority. This corresponds to `NORMAL_PRIORITY_CLASS` on Windows, and a nice value of `0` on all other platforms. */
  PRIORITY_NORMAL: 'PRIORITY_NORMAL',

  /** The process scheduling priority above `PRIORITY_NORMAL` and below `PRIORITY_HIGH`. This corresponds to `ABOVE_NORMAL_PRIORITY_CLASS` on Windows, and a nice value of `-7` on all other platforms. */
  PRIORITY_ABOVE_NORMAL: 'PRIORITY_ABOVE_NORMAL',

  /** The process scheduling priority above `PRIORITY_ABOVE_NORMAL` and below `PRIORITY_HIGHEST`. This corresponds to `HIGH_PRIORITY_CLASS` on Windows, and a nice value of `-14` on all other platforms. */
  PRIORITY_HIGH: 'PRIORITY_HIGH',

  /** The highest process scheduling priority. This corresponds to `REALTIME_PRIORITY_CLASS` on Windows, and a nice value of `-20` on all other platforms. */
  PRIORITY_HIGHEST: 'PRIORITY_HIGHEST',
});

const libuv = Object.freeze({
  UV_UDP_REUSEADDR: 'UV_UDP_REUSEADDR',
});

module.exports = {
  errno,
  signals,
  dlopen,
  priority,
  libuv,

  ERRNO: errno,
  SIGNALS: signals,
  DLOPEN: dlopen,
  PRIORITY: priority,
  LIBUV: libuv,
};
